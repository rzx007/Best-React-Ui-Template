import React, { useState, useEffect } from 'react';
import { Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./index.less";

function NotFound(props) {
    let [count, setCount] = useState(5);
    useEffect(() => {
        let timer = setInterval(() => {
            if (!count) {
                goBack()
                clearInterval(timer)
            }
            setCount(count--)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })
    function goBack() {
        props.history.go(-1)
    }
    return (
        <div className="error-page">
            <div className="error-container">
                <div className="errorContainer">
                    <h1 className="errorCode text-primary">404</h1>
                    <p className="errorInfo">
                        哦豁, it seems that {props.location.pathname} does not exist.
                    </p>
                    <Button type="primary" onClick={() => goBack()} icon={<ArrowLeftOutlined />}>返回({count}s)</Button>

                </div>
            </div>
        </div>
    )
}
export default NotFound;