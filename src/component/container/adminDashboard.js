import React, {Component} from 'react';
import Topbar from './component/topbar2'
import HomeApp from './admin/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Menu, Icon } from 'antd';
import {DATA_ACTIONS} from "../../redux/data/actions";
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'
const {addreset} = DATA_ACTIONS;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class AdminDashboard extends Component {

    componentWillMount() {
        if (localStorage.getItem('logged') !== "admin") {
            this.props.history.push('/login');
        }
    }
    openNotification = (message,status) => {
        notification.open({
            message: message,
            description: status,
        });
    };

    render() {

        if(this.props.add) {
            this.openNotification('Insertion Successful', '');
            let {addreset} = this.props;
            addreset();
            this.props.history.push('/');
        }

        return (
            <div className="">
                <Topbar/>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Menu
                            style={{ width: 256 }}
                            defaultOpenKeys={['sub4']}
                            mode="inline"
                            theme="dark"
                        >

                            <SubMenu key="sub4" title={<span><Icon type="user" /><span>User</span></span>}>
                                <Menu.Item key="9" ><a href="/admindashboard/add">Add a user</a></Menu.Item>
                                <Menu.Item key="10" ><a href="/admindashboard/home">List user</a></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="tag" /><span>Vendor</span></span>}>
                                <Menu.Item key="9" ><a href="/admindashboard/vender">Add a vendor</a></Menu.Item>
                                <Menu.Item key="10" ><a href="/admindashboard/venderlist">List vendor</a></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="export" /><span>Report Generation</span></span>}>
                                <Menu.Item key="9" ><a href="/admindashboard/reportpurchase">purchase report</a></Menu.Item>
                                <Menu.Item key="10" ><a href="/admindashboard/reportsales">sales report</a></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <HomeApp/>
                    </div>

                </div>
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({ add: state.data.get('add')
    }),{addreset}
)(AdminDashboard));