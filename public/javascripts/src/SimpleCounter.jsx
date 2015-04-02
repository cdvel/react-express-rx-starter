var React = require('react');
var BButton = require('react-bootstrap/lib/Button')
var Alert = require('react-bootstrap/lib/Alert');

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
				<BButton bsStyle='primary' onClick={this.incrementCount}>Increment</BButton>
				<Alert bsStyle='warning'>
    				<strong>Holy guacamole!</strong> Best check yo self, youre not looking too good.
  				</Alert>
			</div>
		);
	}
});