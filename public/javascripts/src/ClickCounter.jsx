var React = require('react');
var Button = require('react-bootstrap/lib/Button')
var Alert = require('react-bootstrap/lib/Alert');

module.exports = React.createClass({
	incrementThenAlert: function(){
		this.setState({
			count: this.state.count + 1,
			alertVisible: true
		});
	},
	getInitialState: function(){
		return {
			count: 0,
			alertVisible: false
		}
	},
	handleAlertDismiss: function(){
		this.setState({alertVisible: false});
	},
	render: function() {

		var alertElement;

		if (this.state.alertVisible)
		{
			alertElement = (<Alert bsStyle='info' onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
			    				You have clicked that button <strong>{this.state.count} times!</strong>
			  				</Alert>);
		}
		return (
			<div className="component-panel">
				<div className="row">
					<div className="col-md-6">
		  				<h2>{this.state.alertVisible}</h2>
						<Button bsStyle='primary' onClick={this.incrementThenAlert}>Click me</Button>
					</div>
					<div className="col-md-6">
						{alertElement}
					</div>
				</div>
			</div>
		);
		
	}
});