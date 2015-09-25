import React from 'react';

import UserActivity from './UserActivity'

const UserActivities = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Recent activity</h1>

        <ul>
          {this.props.userActivities.map(function(userActivity){
             return (<UserActivity {...userActivity} />)
          })}
        </ul>

      </div>
    )
  }
});

module.exports = UserActivities;
