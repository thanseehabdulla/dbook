import React, {Component} from 'react';
import './App.css';
import Topbar from './component/topbar2'
import Footer from "./component/footer";
import './../css/nivo-slider-theme.css'
import './../css/responsive.css'
import './../css/style.css'
import './component/damn.css'
import Login from './component/login'

export default class Logins extends Component {
    render() {
        return (
            <div className="App h-100 logpadding">
                <h2 style={{color:'#f47b22'}}>Let's get started</h2>
                <h6><i>dBook is your comprehensive platform to manage everything you need to sell and grow your business</i></h6>


<Login/>

        

               
            </div>
        );
    }
}


