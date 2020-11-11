import React, { Component } from 'react';
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false
         };
    }

    componentDidCatch(error, info){

        this.setState({hasError: true});
    }

    render() {
        return (
            !(this.state.hasError)? this.props.children : <h1>Ooops. That's not good</h1>
        );
    }
}

export default ErrorBoundry;