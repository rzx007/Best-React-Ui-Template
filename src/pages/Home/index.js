import React from "react";
import { Row, Col } from 'antd';
import "./index.less"

import VisitItem from '@/views/Home/VisitItem';
import Revenue from '@/views/Home/Revenue';
import Progress from '@/views/Home/Progress';
import Calendar from '@/views/Home/Calendar';
import Notification from '@/views/Home/Notification';
import Line from '@/views/Home/Line';
import Message from '@/views/Home/Message';
class HomePage extends React.Component {
    render() {
        return (
            <div className="dashboard-page">
                <h1 className="page-title">Analytics <small style={{ color: "#798892", fontSize: "75%" }}>Company Performance</small></h1>
                <div className="sidesWrapper">
                    <div className="analyticsSide">
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><VisitItem /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Revenue /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><Progress /></Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}><VisitItem /></Col>
                        </Row>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}><Line /></Col>
                        </Row>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}><Message type={'danger'} /></Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}><Message  /></Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}><Message type={'success'} /></Col>
                        </Row>
                        <Row gutter={20}>
                            {/* <Col xs={24} sm={24} md={12} lg={6} xl={6}><Revenue /></Col> */}
                            
                        </Row>
                    </div>
                    <div className="analyticsSide">
                    <Row gutter={20}>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><Calendar /></Col>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><Notification /></Col>
                            <Col xs={24} sm={12} md={12} lg={8} xl={24}><Progress /></Col>
                            {/* <Col xs={24} sm={12} md={12} lg={8} xl={24}><VisitItem /></Col> */}
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomePage;