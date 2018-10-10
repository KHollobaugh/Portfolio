import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Bio from './components/bio/Bio';
import Portfolio from './components/portfolio/Portfolio';
import projectData from './Data/projectData';
import './App.css';

class App extends Component {
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

  render() {
    return (
      <div className="App">
      <Navigation />
        <header className="App-header">
      <Bio />
        </header>
      <Portfolio projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
