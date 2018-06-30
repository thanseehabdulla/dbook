import React, {Component} from 'react';
import Topbar from './component/topbar2'
import HomeApp from './admin/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {DATA_ACTIONS} from "../../redux/data/actions";
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'
const {addreset} = DATA_ACTIONS;
class AdminDashboard extends Component {

    componentWillMount() {
        if (localStorage.getItem('logged') !== "admin") {
            this.props.history.push('/login');
        }
    }
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
                <Topbar/>
                <HomeApp/>

            </div>
        );
    }
}


export default withRouter(connect(
    state => ({ add: state.data.get('add')
    }),{addreset}
)(AdminDashboard));