import React, {Component} from 'react';
import PurchaseAdd from './../component/purchaseadd'
import {withRouter} from "react-router-dom";
import Divider from "antd/es/divider/index";
import Steps from "antd/es/steps/index";
const Step = Steps.Step;

class AddPurchase extends Component {
    render() {
        return (
            <div className="App" style={{background:'#fff'}}>
                <div style={{textAlign:'left',margin:'10px 60px'}}>
                <Steps size="small" current={1}>
                    <Step title="SELECT PURCHASE ENTRY" />
                    <Step title="In Progress" />
                    <Step title="UPDATE PURCHASE ENTRY" />
                </Steps>
                </div>
                <Divider orientation="left">ENTER THE PURCHASE DETAIL </Divider>
                <br/>
                <br/>

                <PurchaseAdd/>


            </div>
        );
    }
}

export default withRouter(AddPurchase)
