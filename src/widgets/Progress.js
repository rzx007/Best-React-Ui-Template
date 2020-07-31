import React, { Component } from 'react';
import { Progress } from 'antd';
class ProgressItem extends Component {
    color={
        '0%': '#108ee9',
        '100%': '#87d068',
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">App Perfomance</h5>
                    <div className="widgetBody widget-body ">
                        <h6>SDK</h6>
                        <Progress percent={50} strokeColor={this.color} size="small" status="active" showInfo={false} />
                        <Progress percent={70} size="small" status="exception" showInfo={false} />
                        <h6>Integration</h6>
                        <Progress percent={56} strokeColor={this.color} size="small" status="active" showInfo={false} />
                        <Progress percent={80} size="small" status="exception" showInfo={false} />
                    </div>
                </section>
            </div>
        );
    }
}

export default ProgressItem;