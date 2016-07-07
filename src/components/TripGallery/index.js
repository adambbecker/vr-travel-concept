import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import chunk from 'chunk';
import { Link } from 'react-router';
import { TransitionMotion, spring, presets as springPresets } from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GalleryTrip from './GalleryTrip';
import GalleryIntro from './GalleryIntro';
import trips from '../../data/trips';

require('./style2.scss');

const introHeading = 'The Surveyor';
const introDesc = 'Most of us review the quality of our lives based on a huge variety of factors. For some, this manifests into two particular qualities: the people we spend time with and our surroundings. Trips are our way to improve on both.';
const navItems = [
  { link: 'gallery/recent', text: 'Recent' },
  { link: 'gallery/north-america', text: 'North America' },
  { link: 'gallery/europe', text: 'Europe' },
  { link: 'gallery/carribean', text: 'Carribean' },
];

class TripGallery extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      tripPages: null
    };
  }

  componentWillMount() {
    this.setTripPages(this.props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setTripPages(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  setTripPages({ simulateVR, params: { category: routeCategory } }) {
    let filteredTrips;

    if (routeCategory !== 'recent') {
      filteredTrips = trips.filter(({ category }) => category === routeCategory);
    } else {
      filteredTrips = trips;
    }

    this.setState({
      tripPages: simulateVR ? chunk(filteredTrips, 9) : chunk(filteredTrips, 4)
    });
  }

  render() {
    const { params: { category, page = 0 }, location: { pathname }, simulateVR } = this.props;
    const { tripPages } = this.state;
    const currentPage = parseInt(page);
    const currentTripPage = tripPages ? tripPages[currentPage] : null;
    const transitionOffset = 150;
    const transitionTimeout = currentTripPage ? 1000 + (currentTripPage.length * transitionOffset) : 1000;

    return (
      <section className="trip-gallery">
        <div className="trip-gallery-panel">
          <GalleryIntro
            heading={ introHeading }
            navItems={ navItems }
            pathname={ `gallery/${ category }` }
            page={ currentPage }
            numPages={ tripPages.length - 1 } />
          <ReactCSSTransitionGroup
            className="trip-gallery-trips"
            transitionName="trip-trans"
            transitionAppear={ true }
            transitionEnterTimeout={ transitionTimeout }
            transitionLeaveTimeout={ transitionTimeout }
            transitionAppearTimeout={ transitionTimeout + 700 }>
              {
                currentTripPage ?
                  <div
                    className="trip-gallery-page"
                    style={ {
                      transitionDuration: `${ transitionTimeout }ms`,
                      flexDirection: !simulateVR && currentTripPage.length === 2  ? 'row' : null
                    } }
                    key={ `${ category }-${ currentPage }` }>
                      <GalleryTrip
                        href={ `article/${ currentTripPage[0].id }` }
                        image={ currentTripPage[0].images.featured.src }
                        location={ currentTripPage[0].locations[0].name }
                        title={ currentTripPage[0].title }
                        date={ currentTripPage[0].date }
                        featured={ true }
                        style={ { flex: currentTripPage.length === 2 ? '1' : null } } />
                      {
                        currentTripPage.length > 1 ?
                          <div className="trip-gallery-previews">
                            {
                              currentTripPage.slice(1).map((props, ind) =>
                                <GalleryTrip
                                  href={ `article/${ props.id }` }
                                  image={ props.images.featured.src }
                                  location={ props.locations[0].name }
                                  title={ props.title }
                                  date={ props.date }
                                  featured={ currentTripPage.length === 2 }
                                  style={ {
                                    flex: simulateVR && currentTripPage.length === 6 ? '1 0 33.333%' : null
                                  } }
                                  key={ `previews-${ currentPage }-${ ind }` } />
                              )
                            }
                          </div>
                        : null
                      }
                  </div>
                : null
              }
          </ReactCSSTransitionGroup>
        </div>
      </section>
    );
  }
}

TripGallery.contextTypes = {
  windowDim: React.PropTypes.object,
  simulateVR: React.PropTypes.bool
};

export default TripGallery;
