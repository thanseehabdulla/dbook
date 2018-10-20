import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import Topbar from './component/topbar'
import Footer from "./component/footer";
import Login from "./component/login";



export default class BaseApp extends Component {
    render() {
        return (
            <div className="App">
<Topbar/>
                <div style={{}}>
                    <div style={{display:'inline'}}><img src="https://www.invoicing-software.com/assets/img/multi-platform-invoicing-medium.png" width={345}/></div>
                    <div style={{display:'inline'}}>


                        <Login/></div>
                    <br/>

                </div>
                    <Footer/>
            </div>
        );
    }
}


