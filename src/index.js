import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {IntlProvider} from 'react-intl';


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
registerServiceWorker();
