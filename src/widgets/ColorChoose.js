import React, { Component } from 'react';
import { Popover } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import { BlockPicker, TwitterPicker, CirclePicker  } from "react-color";
import containers from "@/containers/index";
import { changeColor } from "@/redux/actions"
import PropTypes from 'prop-types'
class ColorItem extends Component {
    //声明属性
    static propTypes = {
        state: PropTypes.object.isRequired,
        changeColor: PropTypes.func.isRequired,
    }
    static defaultProps = {
        pickType: "Circle" //Block,Twitter,Circle 三种不同的调测版
    }
    colors = ['#6064f4', '#1DA57A', '#1890ff', "#3AB5A0", "#d54062", "#6f4a8e", "#1b1b2f"]
    constructor(props) {
        super(props);
        this.state = {}
    }
    changeColorPickerCOlor(color) {
        const res = window.less.modifyVars({ '@primary-color': color, })
        return res;
    }
    handleColorChange = (colorCode) => {
        console.log(colorCode);
        this.changeColorPickerCOlor(colorCode.hex).then(() => {
            // 更换自定义样式颜色
            document.body.style.setProperty('--basic-color', colorCode.hex);
            this.props.changeColor(colorCode.hex)
            localStorage.setItem('themeColor', colorCode.hex)
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        const localTheme = localStorage.getItem('themeColor')
        if (localTheme) {
            this.changeColorPickerCOlor(localTheme).then(() => {
                document.body.style.setProperty('--basic-color', localTheme);
            }).catch(error => {
                console.log(error);
            });
        }
    }
    render() {
        let { state, pickType } = this.props
        // console.log(state);
        let Block = <BlockPicker onChangeComplete={this.handleColorChange} colors={this.colors} color={state.themeColor} />
        return (
            <>
                {pickType === 'Block' &&
                    <Popover content={Block} placement="bottom" trigger="click">
                        <BgColorsOutlined title={state.themeColor} twoToneColor="#eb2f96" style={{ fontSize: "2rem" }} />
                    </Popover>
                }
                {pickType === 'Twitter' &&
                    <TwitterPicker  onChangeComplete={this.handleColorChange} colors={this.colors} color={state.themeColor}  />
                }
                {pickType === 'Circle' &&
                    <CirclePicker  onChangeComplete={this.handleColorChange} colors={this.colors} color={state.themeColor}  />
                }
            </>

        );
    }
}

export default containers(ColorItem, 'theme', { changeColor });