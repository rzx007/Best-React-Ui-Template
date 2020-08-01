import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import "./index.less";

//  HooK
function Content(props) {
    useEffect(() => {
        props.history.listen((location) => {  //在这里监听location对象
            console.log(location.pathname);  //切换路由的时候输出"/one/users"和"/one/companies"
            const token = sessionStorage.getItem('token');
            // if (!token) props.history.push('/Login')
        })
    })
    return (
        <div className='main-layout'>
            {props.children}
        </div>
    );

}


export default withRouter(Content);