var React = require('react');
var ClickCounter = require('./ClickCounter.jsx');
var StrongPasswordBox = require('./StrongPasswordBox.jsx');
var SideBar = require('./SideBar.jsx');

module.exports = React.createClass({
	render: function() {

		return (
			<div>
				<div id="header"></div>
				<SideBar />
				<ClickCounter />
				<br />
				<StrongPasswordBox passwordLength={12} />
				<div id="footer" ></div>
			</div>
		);
	}
});