import React, { Component } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import "./index.less"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='global-footer'>
                <div className="global-footer-copyright">
                    <GithubOutlined />Best-React-Ui-Template
                </div>
            </div>
        );
    }
}

export default Footer;