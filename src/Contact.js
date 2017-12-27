/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

/*eslint-enable*/

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };

    if(typeof this.props.activeIndex !== 'undefined'){
      this.props.handleSelected(2);
    }
  }

  render() {
    return (
      <div className="container details-container">
        <div className="columns has-text-centered">
          <div className="column">
            <h1 className="contact-title">Philip Chwistek</h1>
            <br></br>
            <span className="contact-subtitle highlighted"> chwistek.philip@gmail.com </span>
          </div>
        </div>
        <div className="columns has-text-centered">
          <div className="column is-1 is-offset-5">
            <a href="https://linkedin.com/in/philip-chwistek-1a9562141" target="_blank"><span className="icon"><i className="fa fa-linkedin-square fa-2x"></i></span></a>
          </div>
          <div className="column is-1">
            <a href="https://github.com/PChwistek" target="_blank"><span className="icon"><i className="fa fa-github fa-2x"></i></span></a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById('root'));
export default Contact;