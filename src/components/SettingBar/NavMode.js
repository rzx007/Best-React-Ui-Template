import React, { Component } from 'react';
import Inline from "@/assets/inline.png"
import Horizontal from "@/assets/horizontal.png"
import { CheckOutlined } from '@ant-design/icons';
import { changeSilder } from "@/redux/actions"
import containers from "@/containers/index"

// slider 垂直还是水平设置
class NavMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modeArr: [{ media: Inline, mode: "inline" }, { media: Horizontal, mode: "horizontal" }],
        }
    }
    changeSliderMode(mode) {
        this.props.changeSilder(mode)
        localStorage.setItem('mode',mode)
    }
    render() {
        let { modeArr } = this.state;
        let { state } = this.props
        return (
            <>
                <div>
                    {modeArr.map((item, i) =>
                        <div className="mode-item" key={i} onClick={() => this.changeSliderMode(item.mode)}>
                            <img src={item.media} alt='inline' />
                            {item.mode === state.mode &&
                                <CheckOutlined className="text-primary mode-icon" />
                            }
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default containers(NavMode, 'silderMode', { changeSilder });