import React, { Component } from 'react';
class NotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props);
        return (
            <div>
                This is 404 Page url{this.props.location.pathname}
            </div>
        );
    }
}

export default NotFound;