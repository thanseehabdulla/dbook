import React from 'react';
import {Provider} from 'react-redux';
import {store, history} from './../../../redux/store';
import PublicRoutes2 from './router';
import {withRouter} from "react-router-dom";

const HomeApp1 = () =>
  
        <PublicRoutes2/>
  


export default withRouter(HomeApp1);
