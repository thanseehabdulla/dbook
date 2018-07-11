import React from 'react';
import {Provider} from 'react-redux';
import {store, history} from './../../../redux/store';
import PublicRoutes from './router';
import {withRouter} from "react-router-dom";

const HomeApp = () =>
  
        <PublicRoutes/>
  


export default withRouter(HomeApp);
