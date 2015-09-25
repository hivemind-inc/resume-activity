import React from 'react';

const User = React.createClass({
  render: function() {
    return (
      <div className='hk user'>
        <h1>User info</h1>
        <div className='hk user-username'>{this.props.username}</div>
        <div className='hk user-name'>{this.props.name}</div>
        <div className='hk user-created-at'>{this.props.createdAt}</div>
      </div>
    )
  }
});

module.exports = User;
