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


export default class Home extends Component {
    render() {
        return (
            <div className="App">

                <header >
                    <Topbar/>


                    <Carousal/>



                </header>
        <section>
                   <Services/>
        </section>
                <Faq/>
                <Pricing/>
                <LatestNews/>
               
                <Footer/>
            </div>
        );
    }
}


