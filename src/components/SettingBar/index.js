import React, { Component } from 'react';
import ColorPick from "@/widgets/ColorChoose";
import { SkinOutlined } from '@ant-design/icons';
import NavMode from "./NavMode";
import { Drawer } from 'antd';
import "./index.less"
class SettingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            width: 0,
            mask: false
        }
    }
    onClose = () => {
        this.setState({
            visible: false
        })
    };
    triggerDrawer() {
        if (!this.state.width) {
            this.setState({
                width: 300,
                mask:true
            })
            return;
        }
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        return (
            <>
                <Drawer
                    width={this.state.width}
                    mask={this.state.mask}
                    title="Personalization"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className="drawer-handler text-white" onClick={() => this.triggerDrawer()}>
                        <SkinOutlined />
                    </div>
                    <div className="setting-item">
                        <h3 className="mb-lg">Theme Color</h3>
                        <ColorPick />
                    </div>
                    <div className="setting-item">
                        <h3 className="mt-lg mb-lg">Navigation Mode</h3>
                        <NavMode />
                    </div>

                </Drawer>
            </>
        );
    }
}

export default SettingBar;