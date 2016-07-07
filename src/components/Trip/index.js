import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TripIntro from './TripIntro';
import TripMap from './TripMap';
import TripPics from './TripPics';
import TripControls from './TripControls';
import trips from '../../data/trips';

require('./style.scss');

const getPreviousHref = (articleid, page) => {
  if (page) {
    return `article/${ articleid }/${ page - 1 || '' }`;
  } else {
    return 'gallery/recent';
  }
}

const TripContent = ({ articleid, trip, page, simulateVR }) => {
  if (page > 1) {
    return (
      <TripPics
        title={ trip.title }
        items={ trip.images.others }
        simulateVR={ simulateVR } />
    );
  } else if (page === 1) {
    return (
      <TripMap
        locations={ trip.locations }
        mapZoom={ trip.mapZoom }
        date={ trip.date }
        excerpt={ trip.excerpt }
        summaryPs={ trip.summaryPs } />
    );
  } else {
    return (
      <TripIntro
        title={ trip.title }
        location={ trip.locations[0].name }
        date={ trip.date } />
    );
  }
}

const Trip = ({ params: { articleid, page }, simulateVR }) => {
  const trip = trips[articleid - 1];
  page = page ? parseInt(page) : 0;

  return (
    <article className="trip">
      <div className="trip-bg-img" style={ { backgroundImage: `url(${ trip.images.featured.src })` } }></div>
      <div className={ classNames('trip-bg', { 'is-opaque': page === 0 }) }></div>
      <div className={ classNames('trip-bg-overlay', {
        'is-map': page === 1,
        'is-full': page > 1
      }) }></div>
      <ReactCSSTransitionGroup
        transitionName="article-trans"
        transitionEnterTimeout={ 1870 }
        transitionLeaveTimeout={ 1870 }>
          <TripContent
            articleid={ articleid }
            trip={ trip }
            page={ page }
            simulateVR={ simulateVR }
            key={ `article-page-${ page }` } />
      </ReactCSSTransitionGroup>
      <TripControls
        showNext={ !page || page < 2 }
        shifted={ page === 1 }
        previousHref={ getPreviousHref(articleid, page) }
        nextHref={ `article/${ articleid }/${ page ? page + 1 : 1 }` } />
    </article>
  )
}

export default Trip;
