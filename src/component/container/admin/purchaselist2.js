import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'
import { Input } from 'antd';
import ReactExport from "react-data-export";
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const {getPurchaseDate} = DATA_ACTIONS


class Purchaselist extends Component {

    componentDidMount() {
       
        console.log(this.props.data)
    }

    onChange(date, dateString) {
        console.log(date, dateString);
        alert(date)
        alert(dateString[0])
        const {getPurchaseDate} = this.props;
        getPurchaseDate(dateString[0],dateString[1]);
    }

    render() {

        const datas = this.props.data ? this.props.data.get('purchasedata') : {}
        
        
       console.log(this.props.data)

        return (
            <div className="App overallpaddingtable" style={{marginTop:'30px'}}>
                <RangePicker onChange={this.onChange.bind(this)} />
                <br/>
              
                {((localStorage.getItem('level') === 'admin') && datas) &&
                <div style={{padding: '0px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav exportCSV data={ datas }
                                                              tableHeaderClass='my-header-class'
                                                              tableBodyClass='my-body-class'>
                    <TableHeaderColumn isKey dataField='id'
                                       filter={{type: 'TextFilter', delay: 1000}} columnClassName='td-header-string-example'>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='vendername' filter={{type: 'TextFilter', delay: 1000}}>Vender
                        name</TableHeaderColumn>
                    <TableHeaderColumn dataField='trn_no' filter={{type: 'TextFilter', delay: 1000}}>Trn
                        No</TableHeaderColumn>
                    <TableHeaderColumn dataField='date_invoice' filter={{type: 'TextFilter', delay: 1000}}>Date
                        invoice</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'
                                       filter={{type: 'TextFilter', delay: 1000}}>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='vat'
                                       filter={{type: 'TextFilter', delay: 1000}}>Vat</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'
                                       filter={{type: 'TextFilter', delay: 1000}}>Total</TableHeaderColumn>
                    <TableHeaderColumn dataField='invoice_number' filter={{type: 'TextFilter', delay: 1000}}>invoice
                        number</TableHeaderColumn>
                </BootstrapTable></div>
                }

                {((localStorage.getItem('level') !== 'admin') && datas) &&
                <div style={{padding: '0px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav
                                                              tableHeaderClass='my-header-class'
                                                              tableBodyClass='my-body-class'>
                    <TableHeaderColumn isKey dataField='id'
                                       filter={{type: 'TextFilter', delay: 1000}} columnClassName='td-header-string-example'>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='vendername' filter={{type: 'TextFilter', delay: 1000}}>Vendor
                        name</TableHeaderColumn>
                    <TableHeaderColumn dataField='trn_no' filter={{type: 'TextFilter', delay: 1000}}>trn
                        no</TableHeaderColumn>
                    <TableHeaderColumn dataField='date_invoice' filter={{type: 'TextFilter', delay: 1000}}>Date
                        invoice</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'
                                       filter={{type: 'TextFilter', delay: 1000}}>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='vat'
                                       filter={{type: 'TextFilter', delay: 1000}}>Vat</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'
                                       filter={{type: 'TextFilter', delay: 1000}}>Total</TableHeaderColumn>
                    <TableHeaderColumn dataField='invoice_number' filter={{type: 'TextFilter', delay: 1000}}>invoice
                        number</TableHeaderColumn>
                </BootstrapTable></div>
                }

                {/*{datas && <ExcelFile element={<button>Download Excel Data</button>}>*/}
                    {/*<ExcelSheet data={datas} name="purchase">*/}
                        {/*<ExcelColumn label="Vender Name" value="vendername"/>*/}
                        {/*<ExcelColumn label="trn no" value="trn_no"/>*/}
                        {/*<ExcelColumn label="date invoice" value="date_invoice"/>*/}
                        {/*<ExcelColumn label="amount"*/}
                                     {/*value="amount"/>*/}
                        {/*<ExcelColumn label="vat" value="vat"/>*/}
                        {/*<ExcelColumn label="total" value="total"/>*/}
                        {/*<ExcelColumn label="invoice number" value="invoice_number"/>*/}
                    {/*</ExcelSheet>*/}
                {/*</ExcelFile>*/}
                {/*}*/}
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {getPurchaseDate
})(Purchaselist)
