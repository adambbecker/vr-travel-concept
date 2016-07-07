import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import SplitTitle from '../SplitTitle';

const GalleryTrip = ({ href, id, featured, title, location, date, image, style }) =>
  <Link
    to={ href }
    className={ classNames('trip-gallery-trip', { 'is-featured': featured }) }
    style={ style }>
      <div className="trip-gallery-img" style={ { backgroundImage: `url(${ image })` } } />
      <div className="trip-gallery-trip-cover">
        <div className="trip-gallery-trip-banner">
          <p className="trip-gallery-trip-loc">{ location }</p>
          <SplitTitle
            className="trip-gallery-trip-title"
            charClassName="trip-gallery-trip-title-char"
            title={ title } />
          <h5 className="trip-gallery-trip-date">{ date }</h5>
        </div>
      </div>
  </Link>

export default GalleryTrip;
