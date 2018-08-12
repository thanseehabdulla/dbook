import React, {Component} from 'react';

import Venderup from "./../component/venderup";
import Divider from "antd/es/divider/index";

export default class Vender extends Component {
    render() {
        return (
            <div className="App">
                <Divider orientation="left">ENTER THE VENDOR DETAILS</Divider>
<br/>
                <br/>
                <Venderup/>


            </div>
        );
    }
}


