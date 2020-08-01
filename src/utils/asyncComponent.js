import React, { Component } from "react";
// 异步加载模块，高阶组件
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      // 异步加载importComponent()：() => import("@/pages/Monitor/index")
      const { default: component } = await importComponent();

      this.setState({ component });
    }

    render() {
      const AsyncC = this.state.component;

      return AsyncC ? <AsyncC {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}