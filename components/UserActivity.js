import React from 'react';

var UserActivity = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <li>{this.props.occurred_at} - {this.props.kind.replace(/_/g, ' ')}</li>
    )
  }
});

module.exports = UserActivity;
