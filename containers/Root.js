import React from 'react';

// components
import User from '../components/User';
import UserActivities from '../components/UserActivities';
import Projects from '../components/Projects';

var request = require('superagent');

var Root = React.createClass({
  getInitialState: function () {
    return {
      user: {},
      projects: [],
      userActivities: []
    };
  },

  // this will eventually happen in middleware...
  componentDidMount: function () {
    this.getUser_();
    this.getUserActivities_();
  },

  render: function() {
    return (
      <div>
        <User {...this.state.user} />
        <Projects projects={this.state.projects} />
        <UserActivities userActivities={this.state.userActivities} />
      </div>
    );
  },

  getUser_: function () {
    request
      .get('https://www.pivotaltracker.com/services/v5/me')
      .set('X-TrackerToken', '')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (this.isMounted()) {

          const parsedResponse = JSON.parse(res.text);

          this.setState({
            user: {
              username:  parsedResponse.username,
              name:      parsedResponse.name,
              createdAt: parsedResponse.created_at
            },
            projects:  parsedResponse.projects
          });
        }
      }.bind(this));
  },

  getUserActivities_: function () {
    request
      .get('https://www.pivotaltracker.com/services/v5/my/activity?limit=20')
      .set('X-TrackerToken', '')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (this.isMounted()) {

          const parsedResponse = JSON.parse(res.text);

          this.setState({
            userActivities: parsedResponse
          });
        }
      }.bind(this));
  }
});

module.exports = Root;
