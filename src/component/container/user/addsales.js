import React, {Component} from 'react';
import SalesAdd from './../component/salesadd'
import {withRouter} from "react-router-dom";
import Steps from "antd/es/steps/index";
import Divider from "antd/es/divider/index";
const Step = Steps.Step;
export default class AddSales extends Component {
    render() {
        return (
            <div className="App" style={{background:'#fff'}}>
                <div style={{textAlign:'left',margin:'10px 60px'}}>
                    <Steps size="small" current={1}>
                        <Step title="SELECT SALES ENTRY" />
                        <Step title="In Progress" />
                        <Step title="UPDATE SALES ENTRY" />
                    </Steps>
                </div>
                <Divider orientation="left">ENTER THE SALES DETAIL </Divider>
                <br/>
                <br/>
                <SalesAdd/>


            </div>
        );
    }
}


