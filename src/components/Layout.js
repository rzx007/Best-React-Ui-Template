import React, { Component } from 'react';
import Content from "./Content/index"
import NavBar from "./NavBar/index"
import SiderBar from "./SiderBar/index"
import SettingBar from "./SettingBar/index"
import ScrollToTop from "@/utils/ScrollToTop"
import Tags from "./Tags/index"
import containers from "@/containers/index";
import "./Layout.less"

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    NavTrigger(bool) {
        this.setState({
            collapsed: bool
        })
    }
    render() {
        let { state } = this.props;
        let { collapsed } = this.state
        return (
            <div className={["root", collapsed ? "sidebarClose " : ''].join(' ')}>
                {state.mode === "inline" &&
                    <div className="sidebar-wrapper">
                        <SiderBar collapsed={collapsed}></SiderBar>
                    </div>
                }
                <div className={`layout-right ${state.mode !== "inline" ? 'layout-right-fluid' : ''}`}>
                    <div className="app-header">
                        <NavBar trigger={this.NavTrigger.bind(this)}>
                            {state.mode !== "inline" &&
                                <SiderBar collapsed={collapsed}></SiderBar>
                            }
                        </NavBar>
                        <Tags />
                    </div>
                    <ScrollToTop>
                        <div className=" app-content app-content-fixed-header">
                            <Content children={this.props.children}></Content>
                        </div>
                    </ScrollToTop>
                </div>
                <SettingBar />
            </div>
        );
    }
}

export default containers(Layout);