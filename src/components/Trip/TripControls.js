import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

require('./TripControls.scss');

const TripControls = ({ showPrevious, showNext, previousHref, nextHref, shifted }) =>
  <div className={ classNames('trip-controls', {
      'is-shifted': shifted,
      'is-next': !showPrevious,
      'is-previous': !showNext
    }) }>
      <Link to={ previousHref } className={ classNames('trip-control') }>
        <span className={ classNames('trip-control-dark', { 'is-visible': !showNext }) }>&larr; Go Back</span>
        <span>&larr; Go Back</span>
      </Link>
      <Link to={ nextHref } className={ classNames('trip-control', { 'is-hidden': !showNext }) }>Continue &rarr;</Link>
  </div>

export default TripControls;
