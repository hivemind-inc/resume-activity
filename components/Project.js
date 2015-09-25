import React from 'react';

const Project = React.createClass({
  render: function() {
    return (
      <p>{this.props.project_name}</p>
    )
  }
});

module.exports = Project;
