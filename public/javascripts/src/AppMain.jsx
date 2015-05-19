var React = require('react');
var ClickCounter = require('./ClickCounter.jsx');
var StrongPasswordBox = require('./StrongPasswordBox.jsx');


module.exports = React.createClass({
	render: function() {

		return (
			<div>
				<ClickCounter />
				<br />
				<StrongPasswordBox passwordLength={12} />
			</div>
		);
		
	}
});