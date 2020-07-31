import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Map from '@/widgets/Map';
import "./index.less"
class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dashboard-page">
                <h1 className="page-title">Monitor <small style={{ color: "#798892", fontSize: "75%" }}>Company Performance</small></h1>
                <div className="sidesWrapper">
                    <div className="analyticsSide">
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}><Map /></Col>
                        </Row>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Map /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Map /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Map /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Map /></Col>
                        </Row>
                    </div>
                    <div className="analyticsSide">
                        <Row gutter={20}>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><Map /></Col>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><Map /></Col>

                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default ListPage;