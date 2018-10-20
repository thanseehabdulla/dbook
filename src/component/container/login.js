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
            <div className="App h-100">
                {/*<h2 style={{color:'#f47b22'}}>Let's get started</h2>*/}
                {/*<h6><i>dBook is your comprehensive platform to manage everything you need to sell and grow your business</i></h6>*/}

                {window.innerWidth > 768 &&
                <Login/>}
                <hr/>
                <div>

                    <div className="flex social-btns">
                        <a className="app-btn blu flex vert" href="https://play.google.com/store/apps/details?id=com.atsstudios.dbook">
                            <i className="fab fa-apple"></i>
                            <p>Available on the <br/> <span className="big-txt">App Store</span></p>
                        </a>

                        <a className="app-btn blu flex vert" href="https://play.google.com/store/apps/details?id=com.atsstudios.dbook">
                            <i className="fab fa-google-play"></i>
                            <p>Get it on <br/> <span className="big-txt">Google Play</span></p>
                        </a>

                        <a className="app-btn blu flex vert" href="https://play.google.com/store/apps/details?id=com.atsstudios.dbook">
                            <i className="fas fa-desktop"></i>
                            <p>Application <br/> <span className="big-txt">Desktop</span></p>
                        </a>
                    </div>


                </div>

               
            </div>
        );
    }
}


