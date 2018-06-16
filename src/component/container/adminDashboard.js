import React, {Component} from 'react';
import Topbar from './component/topbar2'
import HomeApp from './admin/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AdminDashboard extends Component {

    componentWillMount() {
        if (localStorage.getItem('logged') !== "admin") {
            this.props.history.push('/login');
        }
    }


    render() {
        return (
            <div className="">
                <Topbar/>
                <HomeApp/>

            </div>
        );
    }
}


export default withRouter(connect(
    state => ({})
)(AdminDashboard));