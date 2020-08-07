import React from 'react';
import appRoutes from "@/mock/menu"
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import "./index.less";
const { SubMenu } = Menu;


class SiderBar extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    let { theme } = this.props;
    return (
      <Menu
        onClick={this.handleClick}
        style={{ height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={this.props.collapsed}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <HomeOutlined />
              <span>Dashboard</span>
            </span>
          }
        >
          {appRoutes.map(ele =>
            <Menu.Item key={ele.path}>
              <Link to={ele.path}>{ele.name}</Link>
            </Menu.Item>
          )}

        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>权限相关</span>
            </span>
          }
        >

          <Menu.Item key="9">
            <Link to="/404">404</Link>
          </Menu.Item>
          <Menu.Item key="10">
            color: {theme.themeColor}
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default connect(
  state => ({
    theme: state.theme
  })
)(SiderBar);