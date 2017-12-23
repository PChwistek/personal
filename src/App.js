/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Router from './Router'

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';

/*eslint-enable*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
