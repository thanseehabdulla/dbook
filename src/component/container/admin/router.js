import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';

import Adminlist from './adminlist';
import AdminlistPassword from './adminlistPassword';
import Venderlist from './venderlist';
import Add from './add';
import Vender from './vender';
import Purchaselist from "./purchaselist";
import Saleslist from "./saleslist";


const PublicRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>

                    <Route
                        path="/admindashboard/home"
                        component={Adminlist}
                    />

                    <Route
                        path="/admindashboard/password"
                        component={AdminlistPassword}
                    />

                    <Route
                        path="/admindashboard/venderlist"
                        component={Venderlist}
                    />

                    <Route
                        path="/admindashboard/add"
                        component={Add}
                    />

                    <Route
                        path="/admindashboard/vender"
                        component={Vender}
                    />

                    <Route
                        path="/admindashboard/reportpurchase"
                        component={Purchaselist}
                    />

                    <Route
                        path="/admindashboard/reportsales"
                        component={Saleslist}
                    />

                    <Route
                        path="/admindashboard/"
                        component={Adminlist}
                    />


                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
