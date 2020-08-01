import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
const AntArea = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, [data]);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        title: {
            visible: false,
            text: '',
        },
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            type: 'dateTime',
            tickCount: 5,
        },
    };
    return (
        <div className="widget-wrap">
            <section className="widget">
                <h5 className="title">Ant Chart Area</h5>
                <div className="widgetBody widget-body ">
                    <Area {...config} />
                </div>
            </section>
        </div>
    );
};
export default AntArea;