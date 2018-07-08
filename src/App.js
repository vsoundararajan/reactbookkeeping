import React, { Component } from 'react';
import './App.css';
import { components } from './expenses';


class App extends Component {
  render() {
    return (
      <div className="App">
       <components.ExpensesContainer />
      </div>
    );
  }
}

export default App;
