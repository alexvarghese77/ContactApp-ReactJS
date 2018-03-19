import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.js'
import ContactList from './components/ContactList'
//import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div align="center">
        <Header/>
      <ContactList/>
      </div>      
    );
  }
}

export default App;



