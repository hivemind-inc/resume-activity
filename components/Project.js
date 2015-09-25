import React from 'react';

var Project = React.createClass({
  render: function() {
    console.log('this.props', this.props);
    return (
      <p>{this.props.project_name}</p>
    )
  }
});

module.exports = Project;
