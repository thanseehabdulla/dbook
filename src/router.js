import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';
import Home from './component/container/home';
import Sinup from "./component/container/sinup";
import Logins from "./component/container/login";
import AdminDashboard from "./component/container/adminDashboard";
import Dashboard from "./component/container/Dashboard";


const PublicRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route
                        path="/signup"
                        component={Sinup}
                    />
                    <Route
                        path="/home"
                        component={Home}
                    />
                    <Route
                        path="/login"
                        component={Logins}
                    />
                    <Route
                        path="/admindashboard"
                        component={AdminDashboard}
                    />
                    <Route
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <Route
                        path="/"
                        component={Home}
                    />

                    <Redirect
                        from="*"
                        to={'/404'}
                    />


                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
