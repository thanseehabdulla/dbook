import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form, Icon, Input, Popconfirm, Table} from 'antd';
import {DATA_ACTIONS} from './../../../redux/data/actions'
import ReactExport from "react-data-export";
import Divider from "antd/es/divider/index";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const {get_sales, deleteSales, updateSales} = DATA_ACTIONS;

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'radio'
};

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({form, index, ...props}) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    }
    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({editing}, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }
    handleClickOutside = (e) => {
        const {editing} = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }
    save = () => {
        const {record, handleSave} = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({...record, ...values});
        });
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    render() {
        const {editing} = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{margin: 0}}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                    <div
                                        className="editable-cell-value-wrap"
                                        style={{paddingRight: 24}}
                                        onClick={this.toggleEdit}
                                    >
                                        {restProps.children}
                                    </div>
                                )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}


class Saleslist extends Component {

    state = {
        selectedRowKeys: [],
        datas: null,
        searchText: '',
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    }
    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({searchText: selectedKeys[0]});
    }
    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({searchText: ''});
    }
    handleSave = (row) => {
        // alert(JSON.stringify(row));
        let rowStr = {};
        for (const prop in row) {
            if (prop !== 'net_total')
                rowStr[prop] = row[prop];
        }
          rowStr['net_total'] = (parseFloat(rowStr['net_sales']) + parseFloat(rowStr['tax'])).toFixed(2).toString();
        if (window.confirm('Do you want to save edit')) {
            const {updateSales} = this.props;
            updateSales(rowStr);
            alert("Edited Successful..Please Wait");
            window.location.reload();
        } else {

        }
    }
    options = {
        afterDeleteRow: this.onAfterDeleteRow.bind(this),
        afterSearch: this.afterSearch.bind(this)  // A hook for after droping rows.
    };
    cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: this.onBeforeSaveCell.bind(this), // a hook for before saving cell
        afterSaveCell: this.onAfterSaveCell.bind(this)  // a hook for after saving cell
    };

    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'DATE',
                dataIndex: 'date',
                key: 'date',
                 editable: true,
                filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
                    <div className="custom-filter-dropdown">
                        <Input
                            ref={ele => this.searchInput = ele}
                            placeholder="Search name"
                            value={selectedKeys[0]}
                            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={this.handleSearch(selectedKeys, confirm)}
                        />
                        <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
                        <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
                    </div>
                ),
                filterIcon: filtered => <Icon type="search" style={{color: filtered ? '#108ee9' : '#aaa'}}/>,
                onFilter: (value, record) => record.date.toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: (visible) => {
                    if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus();
                        });
                    }
                },
                render: (text) => {
                    const {searchText} = this.state;
                    return searchText ? (
                        <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                    ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
                    ) : text;
                },

            }, {
                title: 'NET SALES',
                dataIndex: 'net_sales',
                 editable: true,
                key: 'net_sales'


            }, {
                title: 'TAX',
                dataIndex: 'tax',
                 editable: true,
                key: 'tax'

            }, {
                title: 'NET TOTAL',
                dataIndex: 'net_total',
                key: 'net_total',
                render: (text, record) => {
                    return (
                        (parseFloat(record.net_total).toFixed(2)).toString()
                    );

                }

            },
            {
                title: 'ACTION',
                key: 'action',
                render: (text, record) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onAfterDeleteRow(record.id)}>
                            <a href="javascript:;">Delete</a>
                        </Popconfirm>
                    );

                }
            }
        ];
    }

    onAfterDeleteRow(rowKeys) {
        alert("deleted")
        const {deleteSales} = this.props;
        deleteSales(rowKeys);
        let datas = this.state.datas === null ? this.props.data.get('salesdata') : this.state.datas
        datas = this.removeByKey(datas, rowKeys)
        this.setState({datas: datas})

    }


    removeByKey(array, paramsValue) {
        array.some(function (item, index) {
            if (array[index]['id'] === paramsValue) {
                // found it!
                array.splice(index, 1);
                return true; // stops the loop
            }
            return false;
        });
        return array;
    }


    componentDidMount() {
        const {get_sales} = this.props;
        get_sales();
        console.log(this.props.data)
    }

    afterSearch(searchText, result) {
        console.log('Your search text is ' + searchText);
        console.log('Result is:');
        for (let i = 0; i < result.length; i++) {
            console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
        }
    }


    onAfterSaveCell(row, cellName, cellValue) {
        alert(`Save cell ${cellName} with value ${cellValue}`);

        let rowStr = {};
        for (const prop in row) {
            rowStr[prop] = row[prop];
        }
        const {updateuser} = this.props;
        updateuser(rowStr);
        // alert('Thw whole row :\n' + rowStr);
    }

    onBeforeSaveCell(row, cellName, cellValue) {
        // You can do any validation on here for editing value,
        // return false for reject the editing
        if (window.confirm('Do you want to save edit')) {
            return true;
        } else {
            return false;
        }
    }

    render() {

        const datas = this.props.data ? this.props.data.get('salesdata') : {}
        console.log(this.props.data)

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });

        return (
            <div className="App" style={{marginTop: '30px'}}>
                <Divider orientation="left">SALES LIST </Divider>
                {datas && localStorage.getItem('level') === 'admin' && <ExcelFile element={<button className="zoomIn btn btn-orange text-white ld-ext-right" style={{marginBottom:'20px'}}>DOWNLOAD DATA</button>}>
                    <ExcelSheet data={datas} name="User list">
                        <ExcelColumn label="Date"
                                     value="date"/>
                        <ExcelColumn label="Net Sales" value="net_sales"/>
                        <ExcelColumn label="Tax" value="tax"/>
                        <ExcelColumn label="Net Total" value="net_total"/>
                    </ExcelSheet>
                </ExcelFile>}


                {datas &&
                <Table components={components}
                       rowClassName={() => 'editable-row'}
                       dataSource={this.state.datas === null ? datas : this.state.datas} columns={columns}
                       rowKey="id"/>}
            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {
    get_sales, deleteSales, updateSales
})(Saleslist)
