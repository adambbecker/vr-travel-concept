import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('abb-reset-css');
require('./main.scss');

render(<App />, document.getElementById('app'));
