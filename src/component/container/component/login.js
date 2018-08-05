import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from 'react-redux';

import {Redirect, withRouter} from 'react-router-dom';
import a from './../../../images/elogo.jpeg'
import { Button, notification } from 'antd';
import { Input} from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css'
const {login,reset} = DATA_ACTIONS;



class Login extends Component {

    openNotification = (message,status) => {
        notification.open({
            message: message,
            description: status,
        });
    };

    componentWillMount() {
        if(localStorage.getItem('logged') === "admin"){
            this.props.history.push('/admindashboard');
        }else if (localStorage.getItem('logged') !== "null" && localStorage.getItem('logged')){
            this.props.history.push('/dashboard');
        }
    }



    state = {
        username: '',
        password: ''
    }

    changeValue(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }


    login() {
        let user = {
            username: this.state.username,
            password: this.state.password,
        }

        if (this.state.username === 'admin' && this.state.password === 'admin123') {
            const from = {pathname: '/admindashboard'};
            localStorage.setItem('logged','admin')
            this.openNotification('Login Successful','Welcome');
            this.props.history.push('/admindashboard');
        } else {
            let {login} = this.props;
            login(user);
        }


    }


    render() {

        const from = {pathname: '/dashboard'};

        if(this.props.isLoggedIn)
            this.openNotification('Login Successful','Welcome');

        if(this.props.failed) {
            this.openNotification('Login Failed', 'Try Again');
            let {reset} = this.props;
            reset();
        }

        return (
            <div className="App overallpaddinglogin"
                 style={{borderTop: '0px silver solid', borderBottom: '0px silver solid', borderRadius: '5%'}}>

                {this.props.isLoggedIn &&

                <Redirect to={from}/>
                }

                <a href="/">  <img src={a} width={120}/></a>
                <div className="row loginCon">


                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <Input name="username" onBlur={this.changeValue.bind(this)} id="email" type="text"
                                   className="validate form-control form-control-lg "
                                   placeholder="username" style={{}}/>
                            {/*<label htmlFor="email">Email/username</label>*/}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <Input name="password" id="password" onBlur={this.changeValue.bind(this)} type="password"
                                   className="validate form-control form-control-sm "
                                   placeholder="password" style={{}}/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <Button style={{backgroundColor:'#fa8c16'}} className="zoomIn btn btn-orange text-white ld-ext-right"
                            onClick={this.login.bind(this)}><Icon type="login" /> Login
                    </Button>

                </div>
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({
        isLoggedIn: state.data.get('isLoggedIn'),
        failed: state.data.get('failed')
    }),
    {login,reset}
)(Login));