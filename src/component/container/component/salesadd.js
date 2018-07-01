import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin } from 'antd';
import moment from 'moment';

import { DatePicker } from 'antd';

const { register_sales } = DATA_ACTIONS;
const dateFormat = 'MM/DD/YYYY';

class SalesAdd extends Component {

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
            date: this.state.date,
            net_total: this.state.net_total,
            tax: this.state.tax,
            net_sales: this.state.net_sales,
            userid:localStorage.getItem('userid',0)
        }

        console.log(this.props.userid)

        this.setState({
            spin : true
        })

        let {register_sales} = this.props;
        register_sales(data);
    }

    render() {

        if(this.props.add) {
          this.setState({
              spin : false
          })

            // this.props.history.push('/dashboard/saleslist');
          }

        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="input-field col s12">
                                <DatePicker name="date" Placeholder="date" format={dateFormat} onBlur={this.changeValue.bind(this)} className="form-control form-control-lg  "/>
                                {/*<input name="date" placeholder="date" onBlur={this.changeValue.bind(this)} type="text" className="form-control form-control-lg  "/>*/}
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>



                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="net_sales" placeholder="Net Sales" onBlur={this.changeValue.bind(this)} type="number" className="form-control form-control-lg  "/>
                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="tax" placeholder="tax" onBlur={this.changeValue.bind(this)} type="number" className="form-control form-control-lg  "/>
                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="net_total" placeholder="Net Total " onBlur={this.changeValue.bind(this)} type="number" className="form-control form-control-lg  "/>
                            {/*<label htmlFor="first_name">First Name</label>*/}
                        </div>

                    </div>

                </div>
                {this.state.spin && <Spin />}
                <button className="btn btn-orange btn-block text-white btn-lg btn-rounded ld-ext-right" onClick={this.register.bind(this)}>Add Sales</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        add: state.data.get('add'),
        userid: state.data.get('userid')
    }),
    {  register_sales }
)(SalesAdd);
