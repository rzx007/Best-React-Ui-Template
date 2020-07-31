import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

import Layout from '@/components/Layout'
import Login from '@/pages/Login/index'
const Analysis = asyncComponent(() => import("@/pages/Analysis/index"))
const Monitor = asyncComponent(() => import("@/pages/Monitor/index"))
const Widgets = asyncComponent(() => import("@/pages/Widgets/index"))
const NotFound = asyncComponent(() => import("@/pages/NotFound/index"))
class RouterConfig extends Component {

    render() {
        return (
            <HashRouter>
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
            </HashRouter>
        );
    }
}

export default RouterConfig;