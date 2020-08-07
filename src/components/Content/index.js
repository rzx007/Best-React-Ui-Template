import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import "./index.less";
// import store from "@/redux/store"
//  HooK
function Content(props) {
    useEffect(() => {
        props.history.listen((location) => {  //在这里监听location对象
            // console.log(location.pathname);
        })
    })
    return (
        <div className='main-layout'>
            {props.children}
        </div>
    );

}


export default withRouter(Content);