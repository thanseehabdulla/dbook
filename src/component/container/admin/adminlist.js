import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'
import { Breadcrumb } from 'antd';
const {get_data,deleteUser,updateuser} = DATA_ACTIONS

  // If you want to enable deleteRow, you must enable row selection also.
  const selectRowProp = {
    mode: 'radio'
  };

class Adminlist extends Component {

    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }


    options = {
        afterDeleteRow: this.onAfterDeleteRow.bind(this),
        afterSearch: this.afterSearch.bind(this)  // A hook for after droping rows.
      };
 
   afterSearch(searchText, result) {
    console.log('Your search text is ' + searchText);
    console.log('Result is:');
    for (let i = 0; i < result.length; i++) {
      console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
    }
  }

     onAfterDeleteRow(rowKeys){
       alert("deleted")
        const {deleteUser} = this.props;
        deleteUser(rowKeys);
      }


      onAfterSaveCell(row, cellName, cellValue) {
        alert(`Save cell ${cellName} with value ${cellValue}`);
      
        let rowStr = {};
        for (const prop in row) {
          rowStr[prop]= row[prop];
        }
        const {updateuser} = this.props;
        updateuser(rowStr);
        // alert('Thw whole row :\n' + rowStr);
      }
      
       onBeforeSaveCell(row, cellName, cellValue) {
        // You can do any validation on here for editing value,
        // return false for reject the editing
        return true;
      }
      
       cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: this.onBeforeSaveCell.bind(this), // a hook for before saving cell
        afterSaveCell: this.onAfterSaveCell.bind(this)  // a hook for after saving cell
      };


    render() {

        const datas = this.props.data ? this.props.data.get('userdata') : {}
        console.log(this.props.data)

        return (
            <div className="App" style={{marginTop:'30px'}}>
                {/*<Breadcrumb>*/}
                    {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item><a>Userlist</a></Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                {datas && <div style={{padding:'0pxx'}}><BootstrapTable data={datas}  deleteRow={ true }  cellEdit={ this.cellEditProp } search={ true } multiColumnSearch={ true } selectRow={ selectRowProp } striped hover pagination keyBoardNav exportCSV data={ datas }
                                                                        tableHeaderClass='my-header-class-admin'
                                                                        tableBodyClass='my-body-class'>
                                                                          <TableHeaderColumn dataField='id' isKey>User ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' >Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='username' >Username</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' >Phone</TableHeaderColumn>
                    <TableHeaderColumn dataField='address' >Address</TableHeaderColumn>
                    <TableHeaderColumn dataField='level' >Level</TableHeaderColumn>
                    <TableHeaderColumn dataField='password'>Hash Password</TableHeaderColumn>
                </BootstrapTable></div>
                }
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_data,deleteUser,updateuser
})(Adminlist)
