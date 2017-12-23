/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

/*eslint-enable*/

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container main">
        Contact
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById('root'));
export default Contact;