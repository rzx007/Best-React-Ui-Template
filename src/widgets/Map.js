import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/world.js');
class MapItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    chartOption = () => {
        var option = {
            // title: {
            //     text: '',
            //     textStyle: {
            //         fontSize: 30
            //     },
            //     x: 'center'
            // },
            backgroundColor: '#fff',
            tooltip: {
                show: false,
                formatter: function (params) {
                    return params.name + '：' + params.data['value']
                },
            },
            grid: {
                right: 10,
                left: 10
            },

            geo: {
                roam: true,
                zoom: 1.2,
                map: 'world',
                layoutSize: '80%',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        areaColor: '#b4d7ef'
                    },
                    emphasis: {
                        areaColor: '#95c7e9',
                        borderWidth: 1,
                        color: 'green'
                    }
                },
            },
            series: [{
                name: 'mapSer',
                type: 'map',
                roam: false,

                geoIndex: 0,
                label: {
                    show: false,
                },
                data: []
            }
            ]
        };
        return option;
    }
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Trading Activity</h5>
                    <div className="widgetBody widget-body ">
                        <ReactEcharts option={this.chartOption() || {}}
                            style={{ height: '450px', width: '100%' }} />
                    </div>
                </section>
            </div>
        );
    }
}

export default MapItem;