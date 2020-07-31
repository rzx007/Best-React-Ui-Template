import React, { Component } from 'react';
import { MessageOutlined } from '@ant-design/icons';
class NotificationItem extends Component {
    num = [1, 2, 3, 4, 5, 6, 7, 8]
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Notifications</h5>
                    <div className="widgetBody widget-body ">
                        <ul>
                            {this.num.map((item, i) =>
                                <li key={i} className="d-flex align-items-center not-item">
                                    <MessageOutlined className="not-icon" />
                                    <p className="ellipsis not-content">Ken accepts your invitation</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default NotificationItem;