import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin ,Select } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';
const { TextArea } = Input;
const { register } = DATA_ACTIONS;

const Option = Select.Option;
const options = [{
    values: 'admin',
    label: 'Super User'
},{
    values: 'noadmin',
    label: 'Normal User'
}]


class SignUp extends Component {

    state = {spin:false,
    level:'noadmin'}


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
            address: this.state.address,
            level: this.state.level
        }
        console.log(this.state.level)
        this.setState({
            spin : true
        })


        let {register} = this.props;
        register(user);
    }

    render() {
        return (
            <div className="App overallpaddingadminadd">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="Input-field col s12">
                                <Input name="name" placeholder="name" onBlur={this.changeValue.bind(this)} id="first_name" type="text" className="form-control form-control-lg "/>
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>
                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <Input name="username" placeholder="username" onBlur={this.changeValue.bind(this)} id="username" type="text" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                        <div className="row form-group">
                            <div className="Input-field col s12">
                                <Input name="password" placeholder="password" id="password" onBlur={this.changeValue.bind(this)} type="password" className="form-control form-control-lg "/>
                                    {/*<label htmlFor="password">Password</label>*/}
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="Input-field col s12">
                                <Input name="email" placeholder="email" id="email" onBlur={this.changeValue.bind(this)} type="email" className="form-control form-control-lg "/>
                                    {/*<label htmlFor="email">Email</label>*/}
                            </div>
                        </div>

                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <Input name="phone" placeholder="phone" id="email" onBlur={this.changeValue.bind(this)} type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="email">Email</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <TextArea name="address" placeholder="address" onBlur={this.changeValue.bind(this)} id="address" cols={145} row form-groups={5} className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="Input-field col s12">
                            <Select defaultValue={options[1].values} name="level" onChange={(e)=>{
                                this.setState({level:e})
                            }} className="form-control form-control-lg ">
                                <Option value={options[0].values}>{options[0].label}</Option>
                                <Option value={options[1].values}>{options[1].label}</Option>
                            </Select>
                            {/*<TextArea name="address" placeholder="address" onBlur={this.changeValue.bind(this)} id="address" cols={145} row form-groups={5} className="form-control form-control-lg "/>*/}
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>
                </div>
                {this.state.spin && <Spin />}
                <Button className="btn btn-orange btn-block text-white btn-lg ld-ext-right" type="primary" style={{width:'200px'}} onClick={this.register.bind(this)}><Icon type="save" />Save</Button>
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
