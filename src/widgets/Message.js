import React, { Component } from 'react';
import { MessageOutlined } from '@ant-design/icons';
class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgTyoe: [
                { type: 'primary', className: 'bg-primary' },
                { type: 'danger', className: 'bg-danger' },
                { type: 'success', className: 'bg-success' },
            ],
            bgClassName: 'bg-primary'
        }
    }
    // 指定 props 的默认值， 这个方法只有浏览器编译以后 才会生效
    static defaultProps = {
        message: 'Lots of possibilities to customize yournew admin template'
    }
    componentWillMount() {
        const type = this.props.type ? this.props.type : 'primary'
        this.state.msgTyoe.forEach(item => {
            if (item.type === type) {
                this.setState({
                    bgClassName: item.className
                })
            }
        })

    }
    render() {
        return (
            <div className="widget-wrap">
                <section className={`widget ${this.state.bgClassName}`}>
                    <div className="widgetBody widget-body ">
                        <MessageOutlined className=" text-white" style={{ fontSize: '2.4rem' }} />
                        <h5 className="text-white mt-sm">
                            {this.props.message}
                        </h5>
                        <p className="mt-lg  text-white">
                            <strong >83</strong> likes
                             &nbsp;
                            <strong >96</strong> comments
                             &nbsp;
                            <strong>7</strong> shares
                        </p>
                        <p className="mt-lg  text-white">
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default MessageItem;