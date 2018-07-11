import React, {Component} from 'react';
import PurchaseAdd from './../component/purchaseadd'
import {withRouter} from "react-router-dom";

class AddPurchase extends Component {
    render() {
        return (
            <div className="App">
                <br/>
                <br/>
                <PurchaseAdd/>


            </div>
        );
    }
}

export default withRouter(AddPurchase)
