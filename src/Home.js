import React, { Component } from 'react';
import Bio from './components/bio/Bio';
import Portfolio from './components/portfolio/Portfolio';
import projectData from './Data/projectData';

class Home extends Component {
    constructor() {
      super();
      this.state={
        projects: [],
      }
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          projects: projectData,
        });
      }, 0);
    }

    render(){
    return (
        <div>
        <header className="App-header">
      <Bio />
        </header>
      <Portfolio projects={this.state.projects}/>
        </div>
    )
}
}

export default Home;