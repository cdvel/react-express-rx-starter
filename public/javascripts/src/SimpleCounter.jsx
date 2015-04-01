var React = require('react');

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
				<button type="button" onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
});