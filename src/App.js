/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Counter/>
    </div>
  );
     
}

export default App; */
import React, { Component } from 'react'
import Counter from './components/Counter'


export class App extends Component {
  render() {
    return (
      <div>
         <Counter/>
      </div>
    )
  }
}

export default App
