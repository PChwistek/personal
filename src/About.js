/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

/*eslint-enable*/

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container main">
        About
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('root'));
export default About;