import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'
import { Breadcrumb } from 'antd';
const {get_data} = DATA_ACTIONS


class Adminlist extends Component {

    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }


    render() {

        const datas = this.props.data ? this.props.data.get('userdata') : {}
        console.log(this.props.data)

        return (
            <div className="App" style={{marginTop:'30px'}}>
                {/*<Breadcrumb>*/}
                    {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item><a>Userlist</a></Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                {datas && <div style={{padding:'0pxx'}}><BootstrapTable data={datas} striped hover pagination keyBoardNav exportCSV data={ datas }
                                                                        tableHeaderClass='my-header-class'
                                                                        tableBodyClass='my-body-class'>
                    <TableHeaderColumn isKey dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' filter={ { type: 'TextFilter', delay: 1000 } }>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='username' filter={ { type: 'TextFilter', delay: 1000 } }>Username</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' filter={ { type: 'TextFilter', delay: 1000 } }>Phone</TableHeaderColumn>
                    <TableHeaderColumn dataField='address' filter={ { type: 'TextFilter', delay: 1000 } }>Address</TableHeaderColumn>
                    <TableHeaderColumn dataField='level' filter={ { type: 'TextFilter', delay: 1000 } }>Level</TableHeaderColumn>
                </BootstrapTable></div>
                }
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_data
})(Adminlist)
