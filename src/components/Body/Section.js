import React, {Component} from 'react';
import logo from '../../logo.svg';

class Section extends Component{
    render(){
        return (
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World, love Vega!
          </p><p>{4+4-1}</p>
          <a
            className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        );
    }
}

export default Section;