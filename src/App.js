import React from 'react';
import Navigation from './components/navigation/Navigation';
import {Route} from 'react-router-dom';
import Home from './Home';
import './css/index.css';
import ContactModal from '../src/components/contact/ContactModal';

const App = () => {

    return (
      <div className="App">
      <Navigation />
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={ContactModal}/>
      </div>
    );
}

export default App;
