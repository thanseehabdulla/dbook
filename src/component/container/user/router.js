import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Purchaselist from './purchaselist';
import Saleslist from './saleslist';

import AddPurchase from './addpurchase';
import AddSales from './addsales';


const PublicRoutes2 = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>


                    <Route
                        path="/purchaselist"
                        component={Purchaselist}
                    />

                    <Route
                        path="/saleslist"
                        component={Saleslist}
                    />

                    <Route
                        path="/purchaseadd"
                        component={AddPurchase}
                    />

                    <Route
                        path="/salesadd"
                        component={AddSales}
                    />

                    <Route
                        path="/"
                        component={Purchaselist}
                    />

                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes2);
