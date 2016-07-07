import React from 'react';
import classNames from 'classnames';
import { PhotoSwipeGallery } from 'react-photoswipe';
import trips from '../../data/trips';

require('./TripPics.scss');
require('react-photoswipe/lib/photoswipe.css');
require('./photoswipe.scss');

const getThumbnailStyle = (items, item, ind) =>
  ({
    width: `${ 1 / (items.length / 1.25) * 100 }%`,
    transitionDelay: `${ (ind * 50) + 275 }ms`
  })

const ThumbnailContent = ({ src }) =>
  <img src={ src } />

class TripPicsVR extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      vrZommed: false
    };
  }

  toggleVRZoom() {
    this.setState({
      vrZommed: !this.state.vrZommed
    });
  }

  render() {
    const { items } = this.props;
    const { vrZommed } = this.state;

    return (
      <div
        className={ classNames('trip-pics-vr', {
          'is-zoomed': vrZommed,
          'is-some': items.length <= 5 && items.length > 3,
          'is-many': items.length >= 6
        }) }
        onClick={ this.toggleVRZoom.bind(this) }>
          {
            items.map(({ src }, ind) =>
              <div
                className="trip-pic"
                style={ getThumbnailStyle(items, null, ind) }
                key={ src }>
                  <ThumbnailContent src={ src } />
              </div>
            )
          }
      </div>
    );
  }
}

const TripPics = ({ title, items, simulateVR }) =>
  <div className="trip-pics">
    {
      simulateVR ?
        <TripPicsVR items={ items } />
      :
        <PhotoSwipeGallery
          className="trip-pics-pswp"
          thumbnailContent={ ThumbnailContent }
          thumbnailStyle={ getThumbnailStyle }
          thumbnailClassName="trip-pic"
          items={ items }
          options={ {
            shareEl: false,
            fullscreenEl: false
          } } />
    }
    <h5 className="trip-pics-detail is-left">{ title }</h5>
    <h5 className="trip-pics-detail is-right">Gallery</h5>
  </div>

export default TripPics;
