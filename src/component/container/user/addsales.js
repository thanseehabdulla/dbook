import React, {Component} from 'react';
import SalesAdd from './../component/salesadd'
import {withRouter} from "react-router-dom";

export default class AddSales extends Component {
    render() {
        return (
            <div className="App" style={{background:'#fffcfc'}}>
                <br/>
                <br/>
                <SalesAdd/>


            </div>
        );
    }
}


