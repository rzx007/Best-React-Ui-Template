import React from 'react';
import appRoutes from "@/mock/menu"
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
// import { changeSilder } from "@/redux/actions"
import containers from "@/containers/index";
import "./index.less";
const { SubMenu } = Menu;


class SiderBar extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    let { state } = this.props;
    console.log(state);
    return (
      <>
        <Menu
          onClick={this.handleClick}
          style={{ height: '100%' }}
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode={state.mode}
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
            {appRoutes.map((ele, index) =>
              <Menu.Item key={index + 1}>
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
              mode: {state.mode}
            </Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
export default containers(SiderBar);