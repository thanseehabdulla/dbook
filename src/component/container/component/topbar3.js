import React, {Component} from 'react';
import './topbar.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";



class Topbar extends Component {

    logout(){
        localStorage.setItem('logged','null')
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="">
<nav className="navbar navbar-inverse" style={{height:'10px'}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand">eBook System</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
      <li className=""><a href="/dashboard/purchaselist">Purchase List</a></li>
        <li className=""><a href="/dashboard/saleslist">Sales List</a></li>
          <li className=""><a href="/dashboard/purchaseadd">Add Purchase</a></li>
          <li className=""><a href="/dashboard/salesadd">Add Sales</a></li>
          {/*<li className=""><a href="/dashboard/purchasereport">Purchase Report</a></li>*/}
           {/*<li className=""><a href="/dashboard/salesreport">Sales Report</a></li>*/}

        {/* <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li> */}
      </ul>
      <ul className="nav navbar-nav navbar-right">
        {/* <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
        <li><a onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Log Out</a></li>
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

    })
)(Topbar));
