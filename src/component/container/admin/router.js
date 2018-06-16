import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import Adminlist from './adminlist';

import Add from './add';


const PublicRoutes = () => {
    return (
        <BrowserRouter  basename='/admindashboard'>
            <div>
                <Switch>

                <Route
                        path="/home"
                        component={Adminlist}
                    />
                     <Route
                        path="/add"
                        component={Add}
                    />
                    <Route
                        path="/"
                        component={Adminlist}
                    />

                    
 </Switch>
            </div>
        </BrowserRouter>
    );
};

export default connect(
)(PublicRoutes);
