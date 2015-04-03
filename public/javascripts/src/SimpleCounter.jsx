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
				<Alert bsStyle='info'>
    				You've clicked that button <strong>{this.state.count} times!</strong>
  				</Alert>
  				< br/>
				<BButton bsStyle='primary' onClick={this.incrementCount}>Click me</BButton>
			</div>
		);
	}
});