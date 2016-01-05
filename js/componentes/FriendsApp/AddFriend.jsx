var React = require('react');
var PropTypes = React.PropTypes;

var AddFriend = React.createClass({
  getInitialState : function () {
    return {
      newFriend : ''
    }
  },
  propTypes : {
    addFriend : PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    );
  },

  updateNewFriend: function (e) {
    this.setState({
      newFriend : e.target.value
    });
  },
  handleAddNew: function () {
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend : ''
    });
  }

});

module.exports = AddFriend;
