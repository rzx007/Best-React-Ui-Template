import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

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

class RouterConfig extends Component {

    render() {
        const isLogged = sessionStorage.getItem('token') ? true : false;
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/" render={(props) => (isLogged ? <Layout>
                        <Suspense fallback={<Loading />}>
                            {/* {routes.map(ele => handleFilter(ele.permission) && <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)}
						<Redirect from="/" exact to="/dashboard" /> */}

                            <Route exact path="/Analysis">
                                <Analysis {...props}/>
                            </Route>
                            <Route exact path="/Monitor/:id" >
                                <Monitor {...props} />
                            </Route>
                            <Route exact path="/Widgets" component={Widgets} />
                            <Redirect from="/" to="/Analysis" />
                        </Suspense>
                    </Layout> : <Redirect to={'/Login'} />)} />
                    {/* <Redirect exact from="/" to={sessionStorage.getItem('token') ? "/Index" : "/Login"} /> */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>

            </HashRouter>
        );
    }
}

export default RouterConfig;