import React from 'react';
import screenfull from 'screenfull';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';
import Intro from '../Intro';
import Viewport from '../Viewport';
import TripGallery from '../TripGallery';
import Trip from '../Trip';

const routerHistory = process.env.NODE_ENV === 'production' ? browserHistory : hashHistory;

class App extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      simulateVR: false
    };
  }

  toggleSimulateVR() {
    this.setState({
      simulateVR: true
    }, () => {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    });
  }

  render() {
    const { simulateVR } = this.state;

    return (
      <Router history={ routerHistory }>
        <Route path="/" component={ Viewport }>
          <IndexRoute component={ Intro } />
          <Route path="gallery" component={ TripGallery }>
            <Route path=":category">
              <Route path="(:page)"></Route>
            </Route>
          </Route>
          <Route path="article/:articleid" component={ Trip }>
            <Route path="(:page)">
              <Route path="(:zoomPic)"></Route>
            </Route>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
