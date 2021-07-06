import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Map from '@/widgets/Map';
import AntArea from '@/widgets/AntArea';
import Mouse from '@/widgets/Mouse';
import UseHistory from "@/widgets/UseHistory";
import "./index.less"
class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props);
        
        return (
            <div className="dashboard-page">
                <h1 className="page-title">Monitor 
                    <small style={{ color: "#798892", fontSize: "75%" }}>Company Performance</small>
                </h1>
                <div className="sidesWrapper">
                    <div className="analyticsSide">
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}><Map /></Col>
                        </Row>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Mouse /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><UseHistory /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}></Col>
                        </Row>
                    </div>
                    <div className="analyticsSide">
                        <Row gutter={20}>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><AntArea /></Col>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;