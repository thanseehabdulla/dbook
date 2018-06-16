import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'

import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const {get_purchase} = DATA_ACTIONS


class Purchaselist extends Component {

    componentDidMount() {
        const {get_purchase} = this.props;
        get_purchase();
        console.log(this.props.data)
    }


    render() {

        const datas = this.props.data ? this.props.data.get('purchasedata') : {}
        console.log(this.props.data)

        return (
            <div className="App overallpaddinglogin" style={{marginTop:'30px'}}>
                {datas &&
                <div style={{padding: '10px 60px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav>
                    <TableHeaderColumn isKey dataField='id'
                                       filter={{type: 'TextFilter', delay: 1000}}>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='vendername' filter={{type: 'TextFilter', delay: 1000}}>Vender
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

                {datas && <ExcelFile element={<button>Download Excel Data</button>}>
                    <ExcelSheet data={datas} name="purchase">
                        <ExcelColumn label="Vender Name" value="vendername"/>
                        <ExcelColumn label="trn no" value="trn_no"/>
                        <ExcelColumn label="date invoice" value="date_invoice"/>
                        <ExcelColumn label="amount"
                                     value="amount"/>
                        <ExcelColumn label="vat" value="vat"/>
                        <ExcelColumn label="total" value="total"/>
                        <ExcelColumn label="invoice number" value="invoice_number"/>
                    </ExcelSheet>
                </ExcelFile>
                }
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_purchase
})(Purchaselist)
