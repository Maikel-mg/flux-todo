var React = require('react');
var PropTypes = React.PropTypes;
var AddFriend = require('./AddFriend.jsx');
var ShowList = require('./ShowList.jsx');

var FriendsContainer = React.createClass({
  getInitialState : function () {
    alert('In getInitialState');
    return {
      name : "Maikel",
      friends : ["Nagore", "Pepo", "Furbi", "Eli", "Lupas", "Oier"]
    };
  },

  componentWillMount : function () {
    alert('In componentWillMount');
  },
  componentDidMount : function () {
    alert('In componentDidMount');
  },
  componentWillReceiveProps : function () {
    alert('In componentWillReceiveProps');
  },
  componentWillUnmount : function () {
    alert('In componentWillUnmount');
  },

  render: function() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <AddFriend addFriend={this.addFriend}/>
        <ShowList names={this.state.friends}/>
      </div>
    );
  },

  addFriend : function (newFriend) {
    this.setState({
        friend : this.state.friends.push(newFriend)
      });
  }
});

module.exports = FriendsContainer;
