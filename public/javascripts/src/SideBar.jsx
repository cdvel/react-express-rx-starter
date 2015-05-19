var React = require('react');
var _ = require('underscore');
var Button = require('react-bootstrap/lib/Button')
var Alert = require('react-bootstrap/lib/Alert');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var items = [
		<Glyphicon key='up' 	glyph='menu-up' />,
		<Glyphicon key='plus' 	glyph='plus' />,
		<Glyphicon key='heart' 	glyph='heart' />,
		<Glyphicon key='globe' 	glyph='globe' />,
		<Glyphicon key='text' 	glyph='text-size' />,
		<Glyphicon key='down' 	glyph='menu-down' />
	]


module.exports = React.createClass({
	handleClick: function(e){
		
		var key   = e.target.attributes.getNamedItem("data-key").value;
		var options = {block: "end", behavior: "smooth"};

		switch(key){
			case 'up': 		document.getElementById('header').scrollIntoView(options);
							break;
			case 'down': 	document.getElementById('footer').scrollIntoView(options);
							break;
			default: 		console.log(key); 
							break;
		}

		this.setState({
			visible: true
		});
	},
	getInitialState: function(){
		return {
			visible: false
		}
	},
	handleAlertDismiss: function(){
		this.setState({alertVisible: false});
	},
	render: function() {
		var self = this;

		var collection = _.map(items, function(it){
							return(<div className="row bar-item">
								<div className="col-md-2">
									<Button bsStyle='default' bsSize="small" data-key={it.key} onClick={self.handleClick}>{it}</Button>
								</div>
							</div>)
						});

		return (
			<div className="always-visible-left">
				{collection}
			</div>
		);
		
	}
});