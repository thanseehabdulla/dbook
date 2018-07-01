import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import Adminlist from './adminlist';
import Venderlist from './venderlist';
import Add from './add';
import Vender from './vender';


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
                        path="/venderlist"
                        component={Venderlist}
                    />

                     <Route
                        path="/add"
                        component={Add}
                    />
                    <Route
                        path="/vender"
                        component={Vender}
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
