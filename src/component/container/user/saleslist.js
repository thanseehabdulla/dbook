import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const {get_sales} = DATA_ACTIONS


class Saleslist extends Component {

    componentDidMount() {
        const {get_sales} = this.props;
        get_sales();
        console.log(this.props.data)
    }


    render() {

        const datas = this.props.data ? this.props.data.get('salesdata') : {}
        console.log(this.props.data)

        return (
            <div className="App overallpaddinglogin" style={{marginTop:'30px'}}>
                {datas && <div style={{padding:'10px 60px'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav >
                    <TableHeaderColumn isKey dataField='id' filter={ { type: 'TextFilter', delay: 1000 } }>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' filter={ { type: 'TextFilter', delay: 1000 } }>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='item_sold' filter={ { type: 'TextFilter', delay: 1000 } }>Item Sold</TableHeaderColumn>
                    <TableHeaderColumn dataField='gross_sales' filter={ { type: 'TextFilter', delay: 1000 } }>Gross Sales</TableHeaderColumn>
                    <TableHeaderColumn dataField='tax' filter={ { type: 'TextFilter', delay: 1000 } }>Tax</TableHeaderColumn>
                    <TableHeaderColumn dataField='net_sales' filter={ { type: 'TextFilter', delay: 1000 } }>Net Sales</TableHeaderColumn>
                </BootstrapTable></div>
                }

                {datas && <ExcelFile element={<button>Download Excel Data</button>}>
                    <ExcelSheet data={datas} name="purchase">
                        <ExcelColumn label="id" value="id"/>
                        <ExcelColumn label="date" value="date"/>
                        <ExcelColumn label="item sold" value="item_sold"/>
                        <ExcelColumn label="gross sales"
                                     value="gross_sales"/>
                        <ExcelColumn label="tax" value="tax"/>
                        <ExcelColumn label="net sales" value="net_sales"/>

                    </ExcelSheet>
                </ExcelFile>
                }

            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_sales
})(Saleslist)
