import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []

    }
  }
  componentDidMount () {
    let projektUrl = "http://localhost:8080/wp3/wp-json/wp/v2/projects";
    fetch(projektUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
           projects: response
         })
    })
  }

  render () {
   let projects = this.state.projects.map((project, index) => {
      return (
        <div key={index}>
          <img src={project.better_featured_image.source_url}
            alt={project.better_featured_image.alt_text}></img>
          <p><strong>Title:</strong> { project.title.rendered }</p>
          <p><strong>Stack:</strong> { project.acf.stack }</p>
          <p><strong>Date:</strong> { project.acf.date_created }</p>
        </div>
      )
    })
    return (
    <div className="App">
        <h1>Projects</h1>
         {projects}
    </div>
  );
  }  
}

export default App;
