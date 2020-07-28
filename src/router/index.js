import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

import Layout from '../components/Layout'
import Login from '../views/Login'
const HomePage = asyncComponent(() => import("../views/Home"))
const AboutPage = asyncComponent(() => import("../views/About"))
const ListPage = asyncComponent(() => import("../views/List"))
const NotFound = asyncComponent(() => import("../views/404"))
class RouterConfig extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route  path="/Index" render={() =>
                        <Layout >
                            <Redirect to="/Index/Home" />
                            <Route exact path="/Index/Home" component={HomePage} />
                            <Route exact path="/Index/About" component={AboutPage}></Route>
                            <Route exact path="/Index/List" component={ListPage} />
                        </Layout>
                    } >
                    </Route>
                    <Redirect exact from="/"  to="/Index" />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/404" component={NotFound} />
                </Switch>
            </HashRouter>
        );
    }
}

export default RouterConfig;