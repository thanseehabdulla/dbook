import React, {Component} from 'react';
import './topbar.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import a from './../../../images/elogo.jpeg'
import {DATA_ACTIONS} from "../../../redux/data/actions";
import { Menu, Icon } from 'antd';

const {logout} = DATA_ACTIONS;
class Topbar extends Component {

    logout(){
        localStorage.setItem('logged','null')
        let {logout} = this.props;
        logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="">
<nav className="navbar navbar-inverse" style={{height:'10px',backgroundColor:'#001529'}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

        <a className="navbar-brand" style={{color:'white'}}><Icon type="desktop" /><span style={{color:'3ec1d5'}}> d</span>Book</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">

        {/* <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li> */}
      </ul>
      <ul className="nav navbar-nav navbar-right">
        {/* <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
          <li><a style={{color:'white'}}><Icon type="user" />  Administrator</a></li>
        <li><a onClick={this.logout.bind(this)}><Icon type="logout" />  Log Out</a></li>
      </ul>
    </div>
  </div>
</nav>





            </div>
        );
    }
}

export default withRouter(connect(
    state => ({

    }),
    {logout}
)(Topbar));
