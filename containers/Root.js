import React from 'react';

var request = require('superagent');

var User = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      name: '',
      createdAt: ''
    };
  },

  // this will eventually happen in middleware
  componentDidMount: function() {
    request
      .get('https://www.pivotaltracker.com/services/v5/me')
      .set('X-TrackerToken', '3bc8940ec7fb4643646b82e76e55597b')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (this.isMounted()) {
          const parsedResponse = JSON.parse(res.text);

          this.setState({
            username: parsedResponse.username,
            name: parsedResponse.name,
            createdAt: parsedResponse.created_at
          });
        }
      }.bind(this));
  },

  render: function() {
    return (
      <div className='hk user'>
        <h1>User info</h1>
        <div className='hk user-username'>{this.state.username}</div>
        <div className='hk user-name'>{this.state.name}</div>
        <div className='hk user-created-at'>{this.state.createdAt}</div>
      </div>
    );
  }
});

module.exports = User;
