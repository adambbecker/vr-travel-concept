import React from 'react';
import classNames from 'classnames';

require('./style.scss');

const SplitTitle = ({ title, className, charClassName, staggerScalar = 30, delay = 0 }) => {
  const charKeyBase = title.replace(/\s+/g, '');
  return (
    <h3 className={ classNames('split-title', className) }>
      {
        title.split('').map((char, ind) =>
          <span
            className={ classNames('split-title-char', charClassName) }
            style={ { transitionDelay: `${ ind * staggerScalar + delay }ms` } }
            key={ `${ charKeyBase }-${ ind }` }>
            { char === ' ' ?
              <span>&nbsp;</span>
            : char }
          </span>
        )
      }
    </h3>
  );
}

export default SplitTitle;
