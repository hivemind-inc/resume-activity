import React from 'react';

import Project from './Project'

var Projects = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Projects</h1>
        {this.props.projects.map(function(project){
           return (<Project {...project} />)
        })}
      </div>
    )
  }
});

module.exports = Projects;
