import React from 'react';

// components //
import User from '../components/User';
import Projects from '../components/Projects';

var request = require('superagent');

var Root = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      name: '',
      createdAt: '',
      projects: []
    };
  },

  // this will eventually happen in middleware...
  componentDidMount: function() {
    this.getUser_();
  },

  render: function() {
    return (
      <div>
        <User username={this.state.username} name={this.state.name} createdAt={this.state.createdAt} />
        <Projects projects={this.state.projects} />
      </div>
    );
  },

  getUser_: function() {
    request
      .get('https://www.pivotaltracker.com/services/v5/me')
      .set('X-TrackerToken', '3bc8940ec7fb4643646b82e76e55597b')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (this.isMounted()) {

          const parsedResponse = JSON.parse(res.text);
          console.log('parsedResponse', parsedResponse);

          this.setState({
            username: parsedResponse.username,
            name: parsedResponse.name,
            createdAt: parsedResponse.created_at,
            projects: parsedResponse.projects
          });
        }
      }.bind(this));
  }
});

module.exports = Root;
