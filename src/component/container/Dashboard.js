import React, {Component} from 'react';
import Topbar from './component/topbar3'
import Footer from "./component/footer";
import HomeApp1 from './user/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Dashboard extends Component {

    // componentDidMount() {
    //     if(localStorage.getItem('logged') !== "user"){
    //         this.props.history.push('/login');
    //     }
    // }




    render() {
        return (
            <div className="">
                <Topbar/>
                <HomeApp1/>
              
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({

    })
)(Dashboard));