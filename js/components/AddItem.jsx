var React = require('react');

var AddItem = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New item" onKeyDown={this.handleSubmit} />
      </div>
    );
  },
  handleSubmit : function (e){
    if(e.keyCode === 13){
      console.log("REFS", this.refs);
      console.log("REFS newItem", this.refs.newItem);
      console.log("REFS newItem value", this.refs.newItem.value);

      var newItem = this.refs.newItem.value;
      this.refs.newItem.value = '';
      this.props.add(newItem);
    }
  }

});

module.exports = AddItem;
