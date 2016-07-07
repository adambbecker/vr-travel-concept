import React from 'react';
import { Link } from 'react-router';
import trips from '../../data/trips';

require('./style.scss');

const title = 'The Surveyor';
const desc = "Welcome to the surveyor, a demo blog dedicated to the incredible travels undertaken by people from all over the world. It's a place to showcase what webVR might look like as well as the people, places, and trips that inspire us to go out exploring. We hope you enjoy the ride and please explore as much as you'd like.";
const buttonText = 'Start Exploring ';
const introPics = trips.slice(0, 3);

const Intro = (props, context) =>
  <section className="intro">
    <ul className="intro-gallery" style={ { animationDuration: `${ introPics.length * 8 }s` } }>
      { introPics.map(({ images: { featured: { src } } }, ind) =>
        <li className="intro-gallery-item" key={ `intro-${ ind }` }><img src={ src } /></li>
      ) }
    </ul>
    <div className="intro-text">
      <h1 className="intro-title"><span>{ title }</span><span className="intro-title-bar"></span></h1>
      <p className="intro-desc">{ desc }</p>
      <Link className="intro-button" to="/gallery/recent"><span className="intro-button-text">{ buttonText }&rarr;</span></Link>
      <div className="vr-toggle" onClick={ props.toggleSimulateVR }>
        <div className="vr-toggle-text">
          <span className="vr-toggle-text-text">Simulate VR</span>
        </div>
        <div className="vr-toggle-control">
          <div className="vr-toggle-control-marker"></div>
        </div>
      </div>
    </div>
  </section>

export default Intro;
