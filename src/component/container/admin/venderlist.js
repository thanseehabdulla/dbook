import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'

const {get_data} = DATA_ACTIONS


class Venderlist extends Component {

    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }


    render() {

        const datas = this.props.data ? this.props.data.get('userdata') : {}
        console.log(this.props.data)

        return (
            <div className="App overallpaddinglogin" style={{marginTop:'30px'}}>
                {datas && <div style={{padding:'0pxx'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav exportCSV data={ datas }
                                                                        tableHeaderClass='my-header-class'
                                                                        tableBodyClass='my-body-class' >
                    <TableHeaderColumn isKey dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Vender Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='trn_no' filter={ { type: 'TextFilter', delay: 1000 } }>Trn no</TableHeaderColumn>

                </BootstrapTable></div>
                }
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_data
})(Venderlist)
