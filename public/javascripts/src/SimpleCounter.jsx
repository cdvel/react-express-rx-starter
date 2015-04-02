var React = require('react');
var Button = require('react-bootstrap/lib/Button')

module.exports = React.createClass({
	incrementCount: function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	getInitialState: function(){
		return {
			count: 0
		}
	},
	render: function() {
		return (
			<div> 
				<hr />
				<h3>Count: {this.state.count}</h3>
				<Button bsStyle='primary' onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
});