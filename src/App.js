import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Section from './components/Body/Section';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Section />
      </div>
    );
  }
}

export default App;
