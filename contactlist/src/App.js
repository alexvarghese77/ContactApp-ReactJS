import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.js'
import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <ContactList/>
      </div>
      
    );
  }
}

export default App;
