import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin,Select } from 'antd';
import moment from 'moment';

import { DatePicker } from 'antd';
const dateFormat = 'MM/DD/YYYY';
const { register_purchase,vat,amnt,get_vender } = DATA_ACTIONS;
const Option = Select.Option;
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
}];

class PurchaseAdd extends Component {
    state = {spin:false}



    componentDidMount() {
        const {get_vender} = this.props;
        get_vender();
        // console.log(this.props.data)
    }

    changeValue(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name] : value
        })
    }


    register(){
        let data = {
            vendername: this.state.vendername,
            trn_no: this.state.trn_no,
            date_invoice: this.state.date_invoice,
            amount: this.state.amount,
            vat: this.state.vat,
            userid:localStorage.getItem('userid',0),
            invoice_number: this.state.invoice_number,
            total: this.props.data.get('vat') + this.props.data.get('amnt')
        }

        this.setState({
            spin : true
        })


        let {register_purchase} = this.props;
        register_purchase(data);
    }

    render() {

        const totals = this.props.data.get('vat') + this.props.data.get('amnt');
        const datas = this.props.data.get('venderdata')
        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="input-field col s12">
                                {/*<Select defaultValue="Zhejiang">*/}
                                    {/*{ datas.map( val =>*/}
                                        {/*<Option key={val.name} value={val.name}>{val.name}</Option>*/}
                                    {/*)}*/}
                                {/*</Select>*/}

                                {/*<input name="vendername" placeholder="vendername" onBlur={this.changeValue.bind(this)} type="text" className="form-control form-control-lg  "/>*/}
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="trn_no" placeholder="trn no" disabled onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <DatePicker name="date" Placeholder="date" format={dateFormat} onChange={(date: moment, dateString: string) => {
                                this.setState({date_invoice: dateString})
                            }} className="form-control form-control-lg  "/>
                            {/*<input name="date_invoice" placeholder="date invoice" onBlur={this.changeValue.bind(this)}  type="text" className="form-control form-control-lg "/>*/}
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="amount" placeholder="Amount" onChange={(e)=> {
                                const {amnt} = this.props;
                                amnt(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="vat" placeholder="vat" onChange={(e)=> {
                                const {vat} = this.props;
                                vat(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="total" placeholder="total" value={totals} onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="invoice_number" placeholder="invoice_number" onBlur={this.changeValue.bind(this)}  type="text" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                </div>
                {this.state.spin && <Spin />}
                <button className="btn btn-orange btn-block text-white btn-lg btn-rounded ld-ext-right" onClick={this.register.bind(this)}>Add Purchase</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state.data
    }),
    {  register_purchase,vat,amnt,get_vender }
)(PurchaseAdd);
