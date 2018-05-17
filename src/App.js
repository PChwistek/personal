/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Router from './Router'

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';

/*eslint-enable*/

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router />
      </div>
    );
  }
}

export default App;
