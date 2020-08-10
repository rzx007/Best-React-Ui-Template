import React, { Component } from 'react';
class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
        this.vdom = React.createRef();
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    componentDidMount(){
        // console.log( this.vdom.current);
        let el = this.vdom.current;
        el.style.color='red'
    }
    // render prop 组件,react-router-dom 
    render() {
        return (
            <div className="widget-wrap">
                <section className="widget" onMouseMove={this.handleMouseMove}>
                    <h5 className="title">移动鼠标</h5>
                    <div className="widgetBody widget-body " >
                        {/* {this.props.render(this.state)} */}

                        <p ref={this.vdom}>{this.state.x}</p><p>{this.state.y}</p>
                    </div>
                </section>
            </div>

        );
    }
}
export default Mouse;