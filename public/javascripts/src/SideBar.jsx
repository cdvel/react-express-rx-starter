var React = require('react');
var _ = require('underscore');
var Button = require('react-bootstrap/lib/Button')
var Alert = require('react-bootstrap/lib/Alert');
var Modal = require('react-bootstrap/lib/Modal')
var ModalTrigger = require('react-bootstrap/lib/ModalTrigger')
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var items = {
		'up': 	 <Glyphicon key='up' 	glyph='menu-up' />,
		'plus':  <Glyphicon key='plus' 	glyph='plus' />,
		'heart': <Glyphicon key='heart' 	glyph='heart' />,
		'globe': <Glyphicon key='globe' 	glyph='globe' />,
		'text':  <Glyphicon key='text' 	glyph='text-size' />,
		'down':  <Glyphicon key='down' 	glyph='menu-down' />
	};

const MySmallModal = React.createClass({
  render() {
	var iconKey = this.props.iconKey;
    

	  // This probably where you would have an `ajax` call
    return (
      <Modal bsSize='small' backdrop={true} animation={true} dismissAfter={2000}
      container={document.getElementById('mount-point')} onRequestHide={function() {}} >
        <div className='modal-body h1'>
          	{items[iconKey]}
        </div>
        <Button onClick={this.props.onRequestHide}>Close</Button>
      </Modal>
    );
  }
});


module.exports = React.createClass({
	handleClick: function(e){
		
		var key   = e.target.attributes.getNamedItem("data-key").value;
		var options = {block: "end", behavior: "smooth"};

		switch(key){
			case 'up': 		document.getElementById('header').scrollIntoView(options);
							break;
			case 'down': 	document.getElementById('footer').scrollIntoView(options);
							break;
			default: 		this.setState({selected: key});
							//console.log(key); 
							break;
		}

		this.setState({
			visible: true
		});
	},
	getInitialState: function(){
		return {
			selected: '',
			visible: false
		}
	},
	handleAlertDismiss: function(){
		this.setState({alertVisible: false});
	},
	render: function() {
		var self = this;

    	// var myselection = this.state.selected;

		var collection = _.map(items, function(it){
							return(<div className="row bar-item">
								<div className="col-md-2">
									<ModalTrigger modal={<MySmallModal iconKey={it.key} />}>
										<Button bsStyle='default' bsSize="small" data-key={it.key} onClick={self.handleClick}>{it}</Button>
									</ModalTrigger>
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