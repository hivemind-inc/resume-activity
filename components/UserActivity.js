import React from 'react';

const UserActivity = React.createClass({
  render: function() {
    return (
      <li>{this.props.occurred_at} - {this.props.kind.replace(/_/g, ' ')}</li>
    )
  }
});

module.exports = UserActivity;
