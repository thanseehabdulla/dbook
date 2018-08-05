import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import {DatePicker, Icon, Spin, Button} from 'antd';
import moment from 'moment';

const {register_sales, net, tax, clear} = DATA_ACTIONS;
const dateFormat = 'MM/DD/YYYY';

class SalesAdd extends Component {

    state = {
        spin: false,
        net_total: 0
    }


    changeValue(event) {
        let name = event.target.name;
        let value = event.target.value;


        this.setState({[name]: value})


    }


    register() {
        let data = {
            date: this.state.date,
            net_total: this.props.data.get('tax') + this.props.data.get('net'),
            tax: this.state.tax,
            net_sales: this.state.net_sales,
            userid: localStorage.getItem('userid', 0)
        }

        console.log(this.state.date)

        this.setState({
            spin: true
        })

        let {register_sales} = this.props;
        register_sales(data);
    }

    render() {

        // if(this.props.add) {
        //   this.setState({
        //       spin : false
        //   })

        // this.props.history.push('/dashboard/saleslist');
        // }

        const totals = this.props.data.get('tax') + this.props.data.get('net');

        // console.log(totals)

        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                    <div className="row form-group">
                        <div className="input-field col s12">

                            <DatePicker name="date" Placeholder="date" format={dateFormat}
                                        onChange={(date: moment, dateString: string) => {
                                            this.setState({date: dateString})
                                        }} className="form-control form-control-lg  "/>
                            {/*<input name="date" placeholder="date" onBlur={this.changeValue.bind(this)} type="text" className="form-control form-control-lg  "/>*/}


                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>


                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="net_sales" placeholder="Net sales" onChange={(e) => {
                                const {net} = this.props
                                net(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)} type="number"
                                   className="form-control form-control-lg  "/>

                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="tax" placeholder="Tax" onChange={(e) => {
                                const {tax} = this.props
                                tax(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)} type="number"
                                   className="form-control form-control-lg  "/>
                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">

                            <input name="net_total" placeholder="Net total" disabled value={totals}
                                   onChange={this.changeValue.bind(this)} type="number"
                                   className="form-control form-control-lg  "/>

                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                </div>
                {this.state.spin && <Spin/>}
                <Button className="btn btn-orange btn-block text-white btn-lg ld-ext-right" type="primary" style={{width:'200px'}} onClick={this.register.bind(this)}><Icon
                    type="save"/>Save
                </Button>
            </div>
        );
    }
}

export default connect(
    state => ({
        add: state.data.get('add'),
        userid: state.data.get('userid'),
        data: state.data
    }),
    {register_sales, net, tax, clear}
)(SalesAdd);
