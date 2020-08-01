import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Spin } from 'antd';
// import asyncComponent from '@/utils/asyncComponent'
import slowImport from '@/utils/slowImport';

import Layout from '@/components/Layout'
import Login from '@/pages/Login/index'
//  懒加载，React.lazy 也是一个不错的选择
const Analysis = lazy(() => slowImport(import("@/pages/Analysis/index")))
const Monitor = lazy(() => import("@/pages/Monitor/index"))
const Widgets = lazy(() => import("@/pages/Widgets/index"))
const NotFound = lazy(() => import("@/pages/NotFound/index"))
class RouterConfig extends Component {

    render() {
        return (
            <HashRouter>
                <Suspense fallback={<Spin />}>
                    <Switch>
                        <Route path="/Index" render={() =>
                            <Layout >
                                <Redirect to="/Index/Analysis" />
                                <Route exact path="/Index/Analysis" component={Analysis} />
                                <Route exact path="/Index/Monitor" component={Monitor}></Route>
                                <Route exact path="/Index/Widgets" component={Widgets} />
                            </Layout>
                        } >
                        </Route>
                        <Redirect exact from="/" to={sessionStorage.getItem('token') ? "/Index" : "/Login"} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/404" component={NotFound} />
                    </Switch>
                </Suspense>
            </HashRouter>
        );
    }
}

export default RouterConfig;