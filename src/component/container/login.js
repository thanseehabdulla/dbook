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

     <h2>Log In to Dbook</h2>
     <p>Let's get started</p>        

<Login/>

        

               
            </div>
        );
    }
}


