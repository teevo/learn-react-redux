import React from 'react'; // ALIAS FOR: var React = require('react');
import ReactDOM from 'react-dom';

class Hello extends React.Component { // ALIAS FOR: var Hello = React.createClass();
	render() {
		return <h1>HELLO from React Component</h1>
	}
}

ReactDOM.render(<Hello/>, document.getElementById('HelloContainer'));