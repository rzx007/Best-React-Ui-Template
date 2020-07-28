import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "./index.less";
const { SubMenu } = Menu;


class SiderBar extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
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
          <Menu.Item key="1">
            <Link to="/Index/Home">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/Index/About">布局</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Index/List">表格</Link>
          </Menu.Item>
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
        </SubMenu>
      </Menu>
    );
  }
}
export default SiderBar;