import React, {Component} from 'react';
import './App.css';
import Topbar from './component/topbar'
import Footer from "./component/footer";
import Signup from "./component/signup";


export default class Sinup extends Component {
    render() {
        return (
            <div className="App">
                <Topbar/>
                <div style={{}}>
                    <div style={{display: 'inline'}}><img
                        src="https://www.invoicing-software.com/assets/img/multi-platform-invoicing-medium.png"
                        width={345}/></div>
                    <div style={{display: 'inline'}}><Signup/></div>
                    <br/>

                </div>
                <Footer/>
            </div>
        );
    }
}


