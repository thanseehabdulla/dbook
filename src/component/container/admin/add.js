import React, {Component} from 'react';

import Signup from "./../component/signup";
import Divider from "antd/es/divider/index";

export default class Add extends Component {
    render() {
        return (
            <div className="App">
<br/>
                <br/>
                <Divider orientation="left">ENTER DETAIL OF USER</Divider>
                <Signup/>


            </div>
        );
    }
}


