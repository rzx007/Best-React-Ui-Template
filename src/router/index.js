import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

import Layout from '@/components/Layout'
import Login from '@/pages/Login/index'
const HomePage = asyncComponent(() => import("@/pages/Home/index"))
const AboutPage = asyncComponent(() => import("@/pages/About/index"))
const ListPage = asyncComponent(() => import("@/pages/List/index"))
const NotFound = asyncComponent(() => import("@/pages/NotFound/index"))
class RouterConfig extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/Index" render={() =>
                        <Layout >
                            <Redirect to="/Index/Home" />
                            <Route exact path="/Index/Home" component={HomePage} />
                            <Route exact path="/Index/About" component={AboutPage}></Route>
                            <Route exact path="/Index/List" component={ListPage} />
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