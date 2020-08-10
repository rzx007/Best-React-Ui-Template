import React from 'react';
import { useHistory } from "react-router-dom";
import watchRouter from "@/utils/watchRouter"
import { Button } from "antd";

function UseHistory() {
    let history = useHistory();

    function handleClick() {
        history.push("/Analysis");
    }

    return (
        <div className="widget-wrap">
            <section className="widget">
                <h5 className="title">Revenue Breakdown</h5>
                <div className="widgetBody widget-body ">
                    <Button onClick={handleClick}>首页</Button>
                </div>
            </section>
        </div>
    );
}
export default watchRouter(UseHistory);