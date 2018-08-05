import React from 'react';
import {Provider} from 'react-redux';
import {store, history} from './../../../redux/store';
import PublicRoutes2 from './router';
import {withRouter} from "react-router-dom";

const HomeApp1 = () =>
    <Provider store={store}>
        <PublicRoutes2 history={history}/>
    </Provider>


export default withRouter(HomeApp1);
