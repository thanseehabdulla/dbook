import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const {get_sales} = DATA_ACTIONS


class Saleslist2 extends Component {

    componentDidMount() {
        const {get_sales} = this.props;
        get_sales();
        console.log(this.props.data)
    }


    render() {

        const datas = this.props.data ? this.props.data.get('salesdata') : {}
        console.log(this.props.data)

        return (
            <div className="App overallpaddingtable2" style={{marginTop:'30px'}}>
                {((localStorage.getItem('level') === 'admin') && datas) && <div style={{padding:'0px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav exportCSV data={ datas }
                                                                       tableHeaderClass='my-header-class'
                                                                       tableBodyClass='my-body-class'>
                    <TableHeaderColumn isKey dataField='id' filter={ { type: 'TextFilter', delay: 1000 } } columnClassName='td-header-string-example'>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' filter={ { type: 'TextFilter', delay: 1000 } }>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='net_sales' filter={ { type: 'TextFilter', delay: 1000 } }>Net Sales</TableHeaderColumn>
                    <TableHeaderColumn dataField='tax' filter={ { type: 'TextFilter', delay: 1000 } }>Tax</TableHeaderColumn>
                    <TableHeaderColumn dataField='net_total' filter={ { type: 'TextFilter', delay: 1000 } }>Net Total</TableHeaderColumn>
                </BootstrapTable></div>
                }

                {((localStorage.getItem('level') !== 'admin') && datas) && <div style={{padding:'0px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav
                                                                                                                        tableHeaderClass='my-header-class'
                                                                                                                        tableBodyClass='my-body-class'>
                    <TableHeaderColumn isKey dataField='id' filter={ { type: 'TextFilter', delay: 1000 } } columnClassName='td-header-string-example'>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' filter={ { type: 'TextFilter', delay: 1000 } }>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='net_sales' filter={ { type: 'TextFilter', delay: 1000 } }>Net Sales</TableHeaderColumn>
                    <TableHeaderColumn dataField='tax' filter={ { type: 'TextFilter', delay: 1000 } }>Tax</TableHeaderColumn>
                    <TableHeaderColumn dataField='net_total' filter={ { type: 'TextFilter', delay: 1000 } }>Net Total</TableHeaderColumn>
                </BootstrapTable></div>
                }

                {/*{datas && <ExcelFile element={<button>Download Excel Data</button>}>*/}
                    {/*<ExcelSheet data={datas} name="purchase">*/}
                        {/*<ExcelColumn label="id" value="id"/>*/}
                        {/*<ExcelColumn label="date" value="date"/>*/}
                        {/*<ExcelColumn label="item sold" value="item_sold"/>*/}
                        {/*<ExcelColumn label="gross sales"*/}
                                     {/*value="gross_sales"/>*/}
                        {/*<ExcelColumn label="tax" value="tax"/>*/}
                        {/*<ExcelColumn label="net sales" value="net_sales"/>*/}

                    {/*</ExcelSheet>*/}
                {/*</ExcelFile>*/}
                {/*}*/}

            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_sales
})(Saleslist2)
