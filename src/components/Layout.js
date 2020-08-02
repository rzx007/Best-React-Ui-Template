import React, { Component } from 'react';
import Content from "./Content/index"
import NavBar from "./NavBar/index"
import SiderBar from "./SiderBar/index"
import ScrollToTop from "@/utils/ScrollToTop"
import "./Layout.less"

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    NavTrigger(bool) {
        console.log(bool);
        this.setState({
            collapsed: bool
        })
    }
    render() {
        return (
            <div className={["root", this.state.collapsed ? "sidebarClose " : ''].join(' ')}>
                <div className="sidebar-wrapper">
                    <SiderBar collapsed={this.state.collapsed}></SiderBar>
                </div>
                <div className="layout-right">
                    <div className="app-header">
                        <NavBar trigger={this.NavTrigger.bind(this)}></NavBar>
                    </div>
                    <ScrollToTop>
                        <div className="app-content">
                            <Content children={this.props.children}></Content>
                        </div>
                    </ScrollToTop>
                </div>
            </div>
        );
    }
}

export default Layout;