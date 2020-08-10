import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function watchRouter(WrappedComponent, ...props) {
    return function HOC(props) {
        let history = useHistory();
        useEffect(() => {
            console.log(history);
        })

        return (
            <div className="widget-wrap">
                <section className="widget">
                    <h5 className="title">Revenue Breakdown</h5>
                    <div className="widgetBody widget-body ">
                        <WrappedComponent />
                    </div>
                </section>
            </div>
        );
    }
}
export default watchRouter;