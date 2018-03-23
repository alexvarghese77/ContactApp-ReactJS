import React, { Component } from 'react';
import './App.css';
import AppMain from './dev/js/components/AppMain'
import {createStore} from 'redux'
import allReducers from './dev/js/reducers/index'
import {Provider} from 'react-redux'


class App extends Component {
  render() {
    const store=createStore(allReducers);
    return (
      <Provider store={store}>
        <AppMain/>
      </Provider>
        
    );
  }
}

export default App;



