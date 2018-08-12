import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import {DatePicker, Select, Spin,Icon,Button} from 'antd';
import moment from 'moment';

const dateFormat = 'MM/DD/YYYY';
const {register_purchase, vat, amnt, get_vender} = DATA_ACTIONS;
const Option = Select.Option;
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
}];

class PurchaseAdd extends Component {
    state = {spin: false, trn_no: '0'}


    componentDidMount() {
        const {get_vender} = this.props;
        get_vender();
        // console.log(this.props.data)
    }

    changeValue(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }


    register() {
        let data = {
            vendername: this.state.vendername,
            trn_no: this.state.trn_no,
            date_invoice: this.state.date_invoice,
            amount: this.state.amount,
            vat: this.state.vat,
            userid: localStorage.getItem('userid', 0),
            invoice_number: this.state.invoice_number,
            total: parseFloat(this.props.data.get('vat') + this.props.data.get('amnt')).toFixed(2)
        }

        this.setState({
            spin: true
        })


        let {register_purchase} = this.props;
        register_purchase(data);
    }


    render() {

        const totals = parseFloat(this.props.data.get('vat') + this.props.data.get('amnt')).toFixed(2);
        const datas = this.props.data.get('venderdata')

        let options = (datas || []).map((item, index) => {
            return <Option value={item['name'] + '-' + item['trn_no']} key={item['name']}>{(item['name'])}</Option>;
        });

        return (
            <div className="App overallpaddinglogin">

                <div className="row form-group">

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="invoice_number" placeholder="INVOICE NUMBER"
                                   onBlur={this.changeValue.bind(this)} type="text"
                                   className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <Select showSearch placeholder="SELECT A VENDOR" onChange={
                                (e) => this.setState({vendername: e, trn_no: e.split('-')[1]})
                            } className="form-control form-control-lg">
                                {options}
                            </Select>

                            {/*<input name="vendername" placeholder="vendername" onBlur={this.changeValue.bind(this)} type="text" className="form-control form-control-lg  "/>*/}
                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="trn_no" value={this.state.trn_no} placeholder="TRN NO" disabled
                                   onBlur={this.changeValue.bind(this)} type="text"
                                   className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <DatePicker name="date" Placeholder="DATE" format={dateFormat}
                                        onChange={(date: moment, dateString: string) => {
                                            this.setState({date_invoice: dateString})
                                        }} className="form-control form-control-lg  "/>
                            {/*<input name="date_invoice" placeholder="date invoice" onBlur={this.changeValue.bind(this)}  type="text" className="form-control form-control-lg "/>*/}
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="amount" placeholder="AMOUNT" onChange={(e) => {
                                const {amnt} = this.props;
                                amnt(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)} type="number"
                                   className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="vat" placeholder="VAT" onChange={(e) => {
                                const {vat} = this.props;
                                vat(e.target.value);
                            }
                            } onBlur={this.changeValue.bind(this)} type="number"
                                   className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="total" placeholder="TOTAL" value={totals} onBlur={this.changeValue.bind(this)}
                                   type="number" className="form-control form-control-lg" disabled={true}/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>


                </div>
                {this.state.spin && <Spin/>}
                <Button className="btn btn-orange btn-block text-white btn-lg ld-ext-right" type="primary"
                        style={{width: '200px'}} onClick={this.register.bind(this)}><Icon
                    type="save"/>SAVE</Button>
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state.data
    }),
    {register_purchase, vat, amnt, get_vender}
)(PurchaseAdd);
