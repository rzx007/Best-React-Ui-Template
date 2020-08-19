
import React, { Component } from 'react';
import { Input, message } from 'antd';
import Footer from "@/components/Footer"
import { withRouter } from 'react-router-dom'

import "./index.less"

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            loginInfo: {
                username: "",
                password: ""
            },
            redirect_url: ""
        }
    }

    componentDidMount() {
        const redirect_url = "/";
        this.setState({ redirect_url });
        console.log(this.props.history)
        this.props.history.listen(route => {
            console.log(route)
        })
    }

    render() {
        const { loginInfo } = this.state;
        return (
            <div className="login-page">
                <div className="login-form-wrapper">
                    <div className="login-form">
                        <h1 className="text-primary">Best-React-Ui-Template</h1>
                        <h4 className="login-title mb-lg">Login to your Web App</h4>
                        {/* <p className="widget-auth-info">
                            Use your email to sign in.
                        </p> */}
                        <Input
                            value={loginInfo.username}
                            onChange={e => this.changeInputValue(e.target.value, "username")}

                            style={{ marginBottom: 30 }}
                            placeholder="用户名"
                        />
                        <Input
                            value={loginInfo.password}
                            type="password"
                            onChange={e => this.changeInputValue(e.target.value, "password")}

                            placeholder="密码"
                        />
                        <div className="login-btn cursor" onClick={this.login}>登录</div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    changeInputValue(value, name) {
        const { loginInfo } = this.state;
        loginInfo[name] = value;
        this.setState(state => ({ loginInfo: { ...state.loginInfo, ...loginInfo } }))
    }

    login() {
        const { loginInfo, redirect_url } = this.state;
        if (!loginInfo.username
            || !loginInfo.password
            || (loginInfo.username !== "admin"
                && loginInfo.password !== "123456")) return message.error("用户名或密码输入有误");
        loginInfo.date = new Date().getTime();
        const userInfo = JSON.stringify(loginInfo);
        localStorage.setItem("userInfo", userInfo);
        sessionStorage.setItem("token", userInfo);
        this.props.history.push(redirect_url);
        this.setState({ loginInfo: {}, redirect_url: "" });
        message.success("登录成功")
    }
}

export default withRouter(Login);
