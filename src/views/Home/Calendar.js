import React, { Component } from 'react';
import { Calendar } from 'antd';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <div className="widgetBody widget-body ">
                        <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                    </div>
                </section>
            </div>

        );
    }
}

export default CalendarItem;