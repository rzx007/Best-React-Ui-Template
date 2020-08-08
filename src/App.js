import React from 'react';
// import logo from './logo.svg';
import containers from "@/containers/index";
import './App.less';
import Route from './router'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changeColorPickerCOlor(color) {
    const res = window.less.modifyVars({ '@primary-color': color, })
    return res;
  }
  componentDidMount() {
    const localTheme = localStorage.getItem('themeColor')
    if (localTheme) {
      this.changeColorPickerCOlor(localTheme).then(() => {
        document.body.style.setProperty('--basic-color', localTheme);
      }).catch(error => {
        console.log(error);
      });
    }
  }
  render() {
    return (<div className="App">
      <Route></Route>
    </div>);
  }
}

export default containers(App);
