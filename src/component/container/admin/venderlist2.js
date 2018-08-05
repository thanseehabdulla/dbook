import React, {Component} from 'react';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {DATA_ACTIONS} from './../../../redux/data/actions'

const {get_vender,deleteVender,updatevender} = DATA_ACTIONS

// function onAfterDeleteRow(rowKeys) {
//     Venderlist.onAfterDeleteRow2(rowKeys);
//   }
  
  
  
  // If you want to enable deleteRow, you must enable row selection also.
  const selectRowProp = {
    mode: 'radio'
  };

  

class Venderlist extends Component {
 
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
        const {deleteVender} = this.props;
        deleteVender(rowKeys);
      }


    componentDidMount() {
        const {get_vender} = this.props;
        get_vender();
        // console.log(this.props.data)
    }



     onAfterSaveCell(row, cellName, cellValue) {
        alert(`Save cell ${cellName} with value ${cellValue}`);
      
        let rowStr = {};
        for (const prop in row) {
          rowStr[prop]= row[prop];
        }
        const {updatevender} = this.props;
        updatevender(rowStr);
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

        const datas = this.props.data ? this.props.data.get('venderdata') : {}
        console.log(this.props.data)

        return (
            <div className="App overallpaddingtable" style={{marginTop:'30px'}}>
                {datas && <div style={{padding:'0pxx'}}><BootstrapTable data={datas} cellEdit={ this.cellEditProp } deleteRow={ true } search={ true } multiColumnSearch={ true } selectRow={ selectRowProp } options={ this.options } striped hover pagination keyBoardNav exportCSV data={ datas }
                                                                        tableHeaderClass='my-header-class-admin'
                                                                        tableBodyClass='my-body-class' >
                                                                         <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Vender Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='trn_no' >Trn no</TableHeaderColumn>
                  
                </BootstrapTable></div>
                }
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {get_vender,deleteVender,updatevender
})(Venderlist)
