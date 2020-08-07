import React, { Component } from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
class Visit extends Component {
    visitNum = [
        {
            type: "Logins",
            num: '890'
        },
        {
            type: "Sign Out",
            num: '0.5%'
        },
        {
            type: "Rate",
            num: '4.5%'
        }
    ]
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Visits Today</h5>
                    <div className="widgetBody widget-body ">
                        <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.6rem' }}>
                            <h2>4.332</h2>
                            <EnvironmentOutlined className="text-primary" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            {this.visitNum.map((item, i) =>
                                <div className="mt" key={i}>
                                    <h6>{item.num}</h6>
                                    <p className="text-muted mb-0 mr">
                                        <small>{item.type}</small>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default Visit;