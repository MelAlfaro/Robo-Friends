import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) { //esto permite el acceso a this.props en el constructor
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
	this.state({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops!! That does not look good!!</h1>
		}
		return this.props.children
	}
}


export default ErrorBoundry;