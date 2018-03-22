import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.js'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div align="center">
      
      <Router>
        <Switch>
        <Route path="/" exact  component={ContactList}></Route>
        <Route path="/contactdetails/:id" exact strict  component={ContactDetails}></Route>
        </Switch>
      </Router>
      </div>      
    );
  }
}

export default App;



