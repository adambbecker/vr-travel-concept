import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

require('./style.scss');

const vrIconSrc = require('./images/vr-icon.svg');

const Logo = ({ light, hidden, toggleSimulateVR }) =>
  <div className={ classNames('logo-con', {
      'is-hidden': hidden,
      'is-light': light
    }) }>
      <Link to="/" className="logo">
        <span className="logo-dark">The Surveyor</span>
        <span className="logo-light">The Surveyor</span>
      </Link>
      <div className="vr-toggle" onClick={ toggleSimulateVR }>
        <div className="vr-toggle-text">
          <span className="vr-toggle-text-text">Simulate VR</span>
        </div>
        <div className="vr-toggle-control">
          <div className="vr-toggle-control-marker"></div>
        </div>
        <div className="vr-toggle-light">
          <div className="vr-toggle-text">
            <span className="vr-toggle-text-text">Simulate VR</span>
          </div>
          <div className="vr-toggle-control">
            <div className="vr-toggle-control-marker"></div>
          </div>
        </div>
      </div>
  </div>

export default Logo;
