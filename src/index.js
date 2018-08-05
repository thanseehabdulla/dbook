import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {IntlProvider} from 'react-intl';


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
registerServiceWorker();
