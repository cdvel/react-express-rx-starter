var React = require('react');
var Input = require('react-bootstrap/lib/Input');
var Alert = require('react-bootstrap/lib/Alert');
var string = require('string');
var _ = require('underscore');



module.exports = React.createClass({

	getInitialState: function(){
		return {
			text:  "",
			validation: "success",
			message:  [],
			alertVisible: true
		}
	},

	validateInput: function() {

		var pass = 	this.refs.input.getValue()
		var state = "success";
		var mess = [];
		var mLen = 6;

		if (pass.length < mLen)
		{
			mess.push(mLen+" or more characters");
			state = "warning";
		}

		if (string(pass).isAlpha() 
			|| string(pass).isNumeric() 
			|| string(pass).contains(' '))
		{
			mess.push("Must have numbers and letters");
			state = "warning";
		}
		
		if (pass.toUpperCase() == pass || pass.toLowerCase() == pass)
		{
			mess.push("Must have upper and lowercase letters");
			state = "warning";
		}

		var blacklist = require("../../../config.json")['blacklist'];

		for (var i = blacklist.length - 1; i >= 0; i--) {
			if (string(pass.toLowerCase()).contains(blacklist[i]))
			{
				mess.push("contains blacklisted sequence: "+blacklist[i]);
				break;
			}
		};

		if (mess.length == 0)
		{
			mess.push("Good to go!");
			state = "success"
		}

		this.setState({
			text: pass,
			validation: state,
			message: mess, 
			alertVisible:true
		});
	},

	handleClose: function(){
		this.setState({alertVisible: false});
	},

	render: function() {

	var alertElement;

	var messages = _.map(this.state.message, (function(msg){return (<li>{msg}</li>)}));
	
	if (messages .length > 0)
		alertElement = (<Alert bsStyle='info' onDismiss={this.handleClose} dismissAfter={2000}>
				 <ul> 	{messages} </ul>
				</Alert>);


	return (
		<div className='component-panel'>
			<Input	type='password'
					value={this.state.text}
					placeholder='Type in a strong password'
					label='Password '
					help='Validation is based on length and content'
					bsStyle={this.state.validation}
					hasFeedback
					ref='input'
					groupClassName='group-class'
					labelClassName='label-class'
					onChange={this.validateInput} />
			
		{alertElement}		
		</div>
		);	

	}
});