import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin } from 'antd';
const { register } = DATA_ACTIONS;

class SignUp extends Component {

    state = {spin:false}



    changeValue(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name] : value
        })
    }


    register(){
        let user = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address
        }

        this.setState({
            spin : true
        })


        let {register} = this.props;
        register(user);
    }

    render() {
        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="input-field col s12">
                                <input name="name" placeholder="name" onBlur={this.changeValue.bind(this)} id="first_name" type="text" className="form-control form-control-lg form-control-rounded "/>
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="username" placeholder="username" onBlur={this.changeValue.bind(this)} id="username" type="text" className="form-control form-control-lg form-control-rounded"/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                        <div className="row form-group">
                            <div className="input-field col s12">
                                <input name="password" placeholder="password" id="password" onBlur={this.changeValue.bind(this)} type="password" className="form-control form-control-lg form-control-rounded"/>
                                    {/*<label htmlFor="password">Password</label>*/}
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="input-field col s12">
                                <input name="email" placeholder="email" id="email" onBlur={this.changeValue.bind(this)} type="email" className="form-control form-control-lg form-control-rounded"/>
                                    {/*<label htmlFor="email">Email</label>*/}
                            </div>
                        </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="phone" placeholder="phone" id="email" onBlur={this.changeValue.bind(this)} type="number" className="form-control form-control-lg form-control-rounded"/>
                            {/*<label htmlFor="email">Email</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <textarea name="address" placeholder="address" onBlur={this.changeValue.bind(this)} id="address" cols={145} row form-groups={5} className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>
                </div>
                {this.state.spin && <Spin />}
                <button className="btn btn-orange btn-block text-white btn-lg btn-rounded ld-ext-right" onClick={this.register.bind(this)}>Register</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.data.get("isLoggedIn"),
    }),
    {  register }
)(SignUp);
