import React from 'react';
import {Provider} from 'react-redux';
import PublicRoutes from './router';
import {history, store} from './../../../redux/store';
import {withRouter} from "react-router-dom";

const HomeApp = () =>
    <Provider store={store}>
        <PublicRoutes history={history}/>
    </Provider>


export default withRouter(HomeApp);
