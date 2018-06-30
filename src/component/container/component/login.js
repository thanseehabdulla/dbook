import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from 'react-redux';

import {Redirect, withRouter} from 'react-router-dom';
import a from './../../../images/elogo.jpeg'

const {login} = DATA_ACTIONS;

class Login extends Component {


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
            this.props.history.push('/admindashboard');
        } else {
            let {login} = this.props;
            login(user);
        }


    }


    render() {

        const from = {pathname: '/dashboard'};
        return (
            <div className="App overallpaddinglogin"
                 style={{borderTop: '0px silver solid', borderBottom: '0px silver solid', borderRadius: '5%'}}>

                {this.props.isLoggedIn &&

                <Redirect to={from}/>
                }

                <a href="/">  <img src={a} width={120}/></a>
                <div className="row loginCon">


                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="username" onBlur={this.changeValue.bind(this)} id="email" type="text"
                                   className="validate form-control form-control-lg "
                                   placeholder="username" style={{}}/>
                            {/*<label htmlFor="email">Email/username</label>*/}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="password" id="password" onBlur={this.changeValue.bind(this)} type="password"
                                   className="validate form-control form-control-lg "
                                   placeholder="password" style={{}}/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <button className="zoomIn btn btn-orange btn-block text-white btn-lg btn-rounded ld-ext-right"
                            onClick={this.login.bind(this)}>Login
                    </button>

                </div>
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({
        isLoggedIn: state.data.get('isLoggedIn')
    }),
    {login}
)(Login));