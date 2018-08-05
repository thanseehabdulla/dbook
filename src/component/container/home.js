import React, {Component} from 'react';
import './App.css';
import Topbar from './component/topbar'
import Footer from "./component/footer";
import Pricing from "./component/pricing";
import './../css/nivo-slider-theme.css'
import './../css/responsive.css'
import './../css/style.css'
import LatestNews from "./component/latestnews";
import Faq from "./component/faq";
import Services from "./component/services";
import Carousal from "./component/carousal";
import './component/damn.css'
import a from './component/carousalimage/1.jpg'
import Logins from "./login";
import {Animated} from "react-animated-css";
import { BackTop } from 'antd';


export default class Home extends Component {
    render() {
        return (
            <div className="App">

                <header >
                    <Topbar/>
                </header>



                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="jumbotron" style={{backgroundImage:`url(${a})`}}>
                    <div className="container text-center">
                        <Animated animationIn="zoomIn" isVisible={true}>
                        {/*<h1 style={{color:'white'}}>dBook</h1>*/}
                        {/*<p style={{color:'white'}}>dBook is your comprehensive platform to manage everything you need to sell and grow your business</p>*/}
                        </Animated>
                    </div>
                </div>
                </Animated>
                <div className="container-fluid bg-3 text-center">
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
             <Logins/>
                    </Animated>
                    </div>
                    <br/><br/>

                        <footer className="container-fluid text-center" style={{backgroundColor:'#ff8c00',paddingTop:'5px'}}>
                            <p style={{color:'white'}}>&copy; 2018 dbook.com</p>
                        </footer>
                <BackTop />

            </div>
        );
    }
}


