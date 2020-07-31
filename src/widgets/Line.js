import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getOption = () => {
        var option = {
            color: ['#005792', '#d14a61', '#675bba'],
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['2019访问量', '2020访问量']
            },
            grid: {
                left: 0,
                right: 0
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#5793f3'
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '访问量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#5793f3'
                        }
                    },
                },

            ],
            series: [
                {
                    name: '2019访问量',
                    type: 'line',
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '2020访问量',
                    type: 'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Echarts Line</h5>
                    <div className="widgetBody widget-body ">
                        <ReactEcharts option={this.getOption()}
                            style={{ height: '350px', width: '100%' }} />
                    </div>
                </section>
            </div>
        );
    }
}

export default LineItem;