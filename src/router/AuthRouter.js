import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { message } from 'antd';

class AuthRoute extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: true }
    }
    componentDidMount() {
        this.ListenUrl()
        if (this.props.path === this.props.location.pathname) {
            !this.state.isLogged && message.error('尚未登录，请登录');
            console.log('isLogged:' + this.state.isLogged);
        }
    }
    componentDidUpdate() {
        if (this.props.path === this.props.location.pathname) {
            !this.state.isLogged && message.error('尚未登录，请登录');
            console.log('isLogged:' + this.state.isLogged);
        }
    }
    ListenUrl() {
        this.props.history.listen(() => {  //在这里监听location对象
            this.setState({
                isLogged: sessionStorage.getItem('token') ? true : false
            })
        })
    }
    render() {
        let C = <Route {...this.props} component={this.props.component}></Route>;
        if (this.state.isLogged) {
            C = <Route {...this.props} component={this.props.component}></Route>;
        } else {
            C = <Redirect to={{
                pathname: '/Login',
                state: {
                    from: this.props.location.pathname
                }
            }} />
        }
        return C;
    }
}


export default AuthRoute;
