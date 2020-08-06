import React, { Component } from 'react';
import { Popover } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { BlockPicker } from "react-color";
class ColorItem extends Component {
    colors=['#6064f4', '#1DA57A', '#1890ff', "#3AB5A0"]
    constructor(props) {
        super(props);
        this.state = {
            color: '#6064f4',
        }
    }
    handleColorChange = (colorCode) => {
        this.setState({ color: colorCode.hex })
        console.log(colorCode);
        window.less.modifyVars(//更换主题颜色要这么写
            {
                '@primary-color': colorCode.hex,
            }
        )
            .then(() => {
                console.log('success')
                document.body.style.setProperty('--basic-color', colorCode.hex);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let Color = <BlockPicker onChangeComplete={this.handleColorChange} colors={this.colors} color={this.state.color} />
        return (
            <>
                <Popover content={Color} placement="bottom" trigger="click">
                    <HeartTwoTone title={"主题"} twoToneColor="#eb2f96" style={{fontSize:"1.8rem"}} />
                </Popover>
            </>

        );
    }
}

export default ColorItem;