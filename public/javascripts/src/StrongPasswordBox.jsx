var React = require('react');
var Input = require('react-bootstrap/lib/Input');
var Alert = require('react-bootstrap/lib/Alert');
var string = require('string');


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
			mess [0] = mLen+" or more characters";
			state = "warning";
		}

		if (string(pass).isAlpha() 
			|| string(pass).isNumeric() 
			|| string(pass).contains(' '))
		{
			mess [1] = "Must have numbers and letters";
			state = "warning";
		}
		
		if (pass.toUpperCase() == pass || pass.toLowerCase() == pass)
		{
			mess [2] = "Must have upper and lowercase letters";
			state = "warning";
		}

		if (mess == "")
		{
			mess [0] = "Strong!"
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

	//TODO: implement map to display in bullets
	var alertElement = (<Alert bsStyle='info' onDismiss={this.handleClose} dismissAfter={2000}>
			 <ul> 	
			 	<li>
			 		{this.state.message}
				</li>
			 </ul>
			</Alert>);


	return (
		<div className='component-panel'>
			<Input	type='password'
					value={this.state.text}
					placeholder='Type in a strong password'
					label='Password '
					help='Validation is based on length and characters'
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