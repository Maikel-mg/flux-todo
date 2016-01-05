var React = require('react');
var ListContainer = require('./ListContainer.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});


module.exports = App;
