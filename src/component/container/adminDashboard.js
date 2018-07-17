import React, {Component} from 'react';
import Topbar from './component/topbar2'
import HomeApp from './admin/dashboard'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Menu, Icon } from 'antd';
import {DATA_ACTIONS} from "../../redux/data/actions";
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import a from './../../images/elogo.jpeg'
const {addreset} = DATA_ACTIONS;
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
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
            <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => { console.log(broken); }}
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" style={{ textAlign: 'center',padding: '60px 0px' }}><img src={a} width={85} height={85}/> </div>
      <Menu
                            style={{ width: 200 }}
                            defaultOpenKeys={['sub1','sub2','sub3']}
                            mode="inline"
                            theme="dark"
                        >

                            <SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                                <Menu.Item key="1" ><a href="/admindashboard/add">Add a user</a></Menu.Item>
                                <Menu.Item key="2" ><a href="/admindashboard/home">List user</a></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="tag" /><span>Vendor</span></span>}>
                                <Menu.Item key="3" ><a href="/admindashboard/vender">Add a vendor</a></Menu.Item>
                                <Menu.Item key="4" ><a href="/admindashboard/venderlist">List vendor</a></Menu.Item>
                            </SubMenu>
                            {/*<SubMenu key="sub3" title={<span><Icon type="export" /><span>Report Generation</span></span>}>*/}
                                {/*<Menu.Item key="5" ><a href="/admindashboard/reportpurchase">purchase report</a></Menu.Item>*/}
                                {/*<Menu.Item key="6" ><a href="/admindashboard/reportsales">sales report</a></Menu.Item>*/}
                            {/*</SubMenu>*/}
                        </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} ><Topbar/></Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <HomeApp/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      dBytes.ae @ 2018
      </Footer>
    </Layout>
  </Layout>
                
               
               
            </div>
        );
    }
}


export default withRouter(connect(
    state => ({ add: state.data.get('add')
    }),{addreset}
)(AdminDashboard));