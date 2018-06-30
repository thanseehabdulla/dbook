import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin } from 'antd';
const { register_purchase } = DATA_ACTIONS;

class PurchaseAdd extends Component {
    state = {spin:false}




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
            invoice_number: this.state.invoice_number,
            total: this.state.total
        }

        this.setState({
            spin : true
        })

        let {register_purchase} = this.props;
        register_purchase(data);
    }

    render() {
        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="input-field col s12">
                                <input name="vendername" placeholder="vendername" onBlur={this.changeValue.bind(this)} type="text" className="form-control form-control-lg  "/>
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="trn_no" placeholder="trn no" onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="date_invoice" placeholder="date invoice" onBlur={this.changeValue.bind(this)}  type="text" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="amount" placeholder="amount" onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="vat" placeholder="vat" onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="total" placeholder="total" onBlur={this.changeValue.bind(this)}  type="number" className="form-control form-control-lg "/>
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

    }),
    {  register_purchase }
)(PurchaseAdd);
