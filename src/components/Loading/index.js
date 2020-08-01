import React, { Component } from 'react';
import { Spin } from 'antd';
import "./index.less";
class LoadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="loading-wrap">
                <Spin size="large" />
            </div>
         );
    }
}
 
export default LoadingPage;