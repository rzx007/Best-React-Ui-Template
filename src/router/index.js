import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import AthuRoute from "./AuthRouter";
import slowImport from '@/utils/slowImport';
import Loading from '@/components/Loading'
import Layout from '@/components/Layout'
import Login from '@/pages/Login/index'
import NotFound from '@/pages/NotFound/index'
//  懒加载，React.lazy 也是一个不错的选择
const Analysis = lazy(() => slowImport(import("@/pages/Analysis/index")))  //模拟网络加载
const Monitor = lazy(() => import("@/pages/Monitor/index"))
const Widgets = lazy(() => import("@/pages/Widgets/index"))
// import asyncComponent from '@/utils/asyncComponent'
// react-transition-group  切换动画

class RouterConfig extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/" render={(props) => (<Layout>
                        <Suspense fallback={<Loading />}>
                            {/* {routes.map(ele => handleFilter(ele.permission) && <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)}
						<Redirect from="/" exact to="/dashboard" /> */}
                            <AthuRoute path="/Analysis" {...props} component={Analysis}></AthuRoute>
                            <AthuRoute path="/Monitor" {...props} component={Monitor}></AthuRoute>
                            <AthuRoute path="/Widgets" {...props} component={Widgets}></AthuRoute>
                            <Redirect from="/" to="/Analysis" />
                        </Suspense>
                    </Layout>)} />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>

            </HashRouter>
        );
    }
}

export default RouterConfig;