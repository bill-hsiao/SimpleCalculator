// src/App.js
import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display';
import ButtonPanel from './Components/ButtonPanel';

import operate from './logic/operate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    val: null
    };
  }
  handleClick = buttonName => {
    this.setState(operate(this.state, buttonName));
  };


      render() {
        return (
          <div className="component-app">
            <Display value={this.state.total || '0'} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        );
      }
    }
export default App;
