import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const NavItem = ({ link, text, isCategory }) =>
  <li className="trip-gallery-intro-nav-item">
    <Link to={ link } className="trip-gallery-intro-nav-link" activeClassName="is-active">
      <span className="trip-gallery-intro-nav-item-bg" />
      <span className="trip-gallery-intro-nav-item-borders" />
      <span className={ classNames('trip-gallery-intro-nav-item-text', { 'is-category': isCategory }) }>{ text }</span>
    </Link>
  </li>

const GalleryIntro = ({ heading, navItems, pathname, page, numPages }) =>
  <div className="trip-gallery-intro">
    <nav className="trip-gallery-intro-nav">
      <ul>
        {
          navItems.map((props, ind) =>
            <NavItem { ...props } key={ `nav-item-${ ind }` } />
          )
        }
      </ul>
    </nav>
    <div className="trip-gallery-intro-search" title="Search not available... yet">
      <svg
        height={ 24 }
        width={ 24 }
        className="trip-gallery-intro-search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <g><path d="M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"/></g>
      </svg>
    </div>
    <ReactCSSTransitionGroup
      component="div"
      className="trip-gallery-intro-pagination"
      transitionName="pagination-trans"
      transitionAppear={ true }
      transitionEnterTimeout={ 1000 }
      transitionLeaveTimeout={ 1000 }
      transitionAppearTimeout={ 1600 }>
      {
        !(page === numPages) && numPages > 0 ?
          <Link
            to={ `${ pathname }/${ page + 1 }` }
            className="trip-gallery-intro-pagination-link is-next"
            key={ 'next-page' }>&larr;{ ' Next Page' }</Link>
        : null
      }
      {
        page > 0 ?
          <Link
            to={ `${ pathname }/${ page - 1 > 0 ? page - 1 : '' }` }
            className="trip-gallery-intro-pagination-link is-previous"
            key={ 'previous-page' }>{ 'Previous Page ' }&rarr;</Link>
        : null
      }
    </ReactCSSTransitionGroup>
  </div>

export default GalleryIntro;
