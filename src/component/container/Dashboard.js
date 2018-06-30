import React, {Component} from 'react';
import Topbar from './component/topbar3'
import Footer from "./component/footer";
import HomeApp1 from './user/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Animated} from "react-animated-css";
class Dashboard extends Component {

    // componentDidMount() {
    //     if(localStorage.getItem('logged') !== "user"){
    //         this.props.history.push('/login');
    //     }
    // }




    render() {
        return (
            <div className="">
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                <Topbar/>
                </Animated>
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                <HomeApp1/>
                </Animated>
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({

    })
)(Dashboard));