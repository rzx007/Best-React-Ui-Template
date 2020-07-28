import React, { Component } from 'react';

import "./index.less"
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='main-layout'>
                {this.props.children}
            </div>
        );
    }
}

export default Content;