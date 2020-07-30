import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
let data = {
    labels: ['network', 'mobile', 'ad'],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#005792', '#1a86d0', '#fd5f00'],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        legend: {
            display: false,
            position: "right"
        }
    }]
};
class Revenue extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Revenue Breakdown</h5>
                    <div className="widgetBody widget-body ">
                        <Doughnut data={data} />
                    </div>
                </section>
            </div>
        );
    }
}

export default Revenue;