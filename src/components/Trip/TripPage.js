import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

require('./TripPage.scss');

const TripPage = ({ articleid, page, pics, zoomPic }) =>
  <div className="trip-page">
    <div className={ `trip-page-pics is-${ pics.length }up` }>
      {
        pics.map((picUrl, ind) =>
          <Link
            to={ `article/${ articleid }/${ page }${ zoomPic !== (ind + 1) ? '/' + (ind + 1) : '' }` }
            className="trip-page-pic"
            style={ {
              backgroundImage: `url(${ picUrl })`,
              opacity: zoomPic && zoomPic !== ind + 1 ? 0 : null,
              transform: zoomPic && zoomPic === ind + 1 ? 'scale(1) translate(0, 0)' : null,
              zIndex: zoomPic && zoomPic === ind + 1 ? 100 : null
            } }
            key={ picUrl } />
        )
      }
    </div>
  </div>

export default TripPage;
