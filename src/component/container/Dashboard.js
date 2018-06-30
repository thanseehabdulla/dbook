import React, {Component} from 'react';
import Topbar from './component/topbar3'
import Footer from "./component/footer";
import HomeApp1 from './user/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Animated} from "react-animated-css";
import {DATA_ACTIONS} from "../../redux/data/actions";
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'
const {addreset} = DATA_ACTIONS;
class Dashboard extends Component {

    // componentDidMount() {
    //     if(localStorage.getItem('logged') !== "user"){
    //         this.props.history.push('/login');
    //     }
    // }

    openNotification = (message,status) => {
        notification.open({
            message: message,
            description: status,
        });
    };


    render() {

        if(this.props.add) {
            this.openNotification('Insertion Successful', '');
            let {addreset} = this.props;
            addreset();
            this.props.history.push('/');
        }

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
        add: state.data.get('add')
    }),{addreset}
)(Dashboard));