import React from 'react';
import SplitTitle from '../SplitTitle';

require('./TripIntro.scss');

const TripIntro = ({ location, date, title }) =>
  <div className="trip-intro">
    <h5 className="trip-intro-detail is-left"><span className="trip-intro-detail-text">{ location }</span></h5>
    <h5 className="trip-intro-detail is-right"><span className="trip-intro-detail-text">{ date }</span></h5>
    <SplitTitle
      className="trip-intro-title"
      charClassName="trip-intro-title-char"
      staggerScalar={ 50 }
      delay={ 325 }
      title={ title } />
  </div>

export default TripIntro;
