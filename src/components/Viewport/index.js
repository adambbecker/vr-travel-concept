import React from 'react';
import classNames from 'classnames';
import screenfull from 'screenfull';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from '../Logo';

require('./style.scss');

class Viewport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: {
        x: null,
        y: null
      },
      windowDim: {
        width: null,
        height: null
      },
      simulateVR: false
    };
  }

  componentDidMount() {
    this.setState({
      windowDim: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }, () => {
      if (screenfull.enabled) {
        document.addEventListener(screenfull.raw.fullscreenchange, () => {
          if (!screenfull.isFullscreen) {
            this.setState({
              simulateVR: false
            });
          }
        });
      }
    });
  }

  componentWillUnmount() {
    if (screenfull.enabled) {
      document.removeEventListener(screenfull.raw.fullscreenchange);
    }
  }

  getChildContext() {
    const { windowDim, simulateVR } = this.state;

    return {
      windowDim,
      simulateVR
    };
  }

  toggleSimulateVR() {
    this.setState({
      simulateVR: !this.state.simulateVR
    }, () => {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    });
  }

  handleMouseMove({ pageX, pageY }) {
    this.setState({
      mouse: {
        x: pageX,
        y: pageY
      }
    });
  }

  render() {
    const { children, location: { pathname }, params: { articleid, page = 0 } } = this.props;
    const { mouse, windowDim, simulateVR } = this.state;

    const splitPath = pathname.split('/');
    const basePath = splitPath[0] !== '' ? splitPath[0] : splitPath[1];

    const xRatio = ( windowDim.width / 2 ) - mouse.x;
    const yRatio = ( windowDim.height / 2 ) - mouse.y;

    const translateX = xRatio / ( windowDim.width * 0.835 ) * 50;
    const translateY = yRatio / ( windowDim.height * 0.3 ) * 12.5;
    const rotateY = xRatio / ( windowDim.width / 2 ) * -16;
    const rotateX = yRatio / ( windowDim.height / 2 ) * 10;

    const styles = {
      transform: `translate(${ translateX }vw, ${ translateY }vh) rotateY(${ rotateY }deg) rotateX(${ rotateX }deg)`,
      WebkitTransform: `translate(${ translateX }vw, ${ translateY }vh) rotateY(${ rotateY }deg) rotateX(${ rotateX }deg)`
    };

    return (
      <div className="viewport-con" onMouseMove={ simulateVR ? this.handleMouseMove.bind(this) : null }>
        <div
          className={ classNames('viewport', { 'is-vr': simulateVR }) }
          style={ simulateVR ? styles : null }>
            <div className={ classNames('viewport-bg', {
              'is-displaced': pathname === '/',
              'is-flat': basePath === 'article'
            }) }></div>
            <ReactCSSTransitionGroup
              component="div"
              transitionName="page-trans"
              transitionEnterTimeout={ 2050 }
              transitionLeaveTimeout={ 1025 }>
                {
                  React.cloneElement(children, {
                    key: basePath,
                    simulateVR: simulateVR,
                    toggleSimulateVR: this.toggleSimulateVR.bind(this)
                  })
                }
            </ReactCSSTransitionGroup>
            <Logo
              light={ articleid && parseInt(page) < 2 }
              hidden={ pathname === '/' || (!simulateVR && articleid && parseInt(page) === 2) }
              toggleSimulateVR={ this.toggleSimulateVR.bind(this) } />
        </div>

      </div>
    );
  }
};

Viewport.childContextTypes = {
  windowDim: React.PropTypes.object,
  simulateVR: React.PropTypes.bool
};

export default Viewport;
