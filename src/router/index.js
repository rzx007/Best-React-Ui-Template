import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import AthuRoute from "./AuthRouter";

import Loading from '@/components/Loading'
import Layout from '@/components/Layout'
import Login from '@/pages/Login/index'
import NotFound from '@/pages/NotFound/index'
import appRoutes from "@/mock/menu"

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
                            {appRoutes.map(ele => <AthuRoute path={ele.path} {...props} key={ele.component} component={lazy(() => import(`@/pages/${ele.component}/index`))}></AthuRoute>)}
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