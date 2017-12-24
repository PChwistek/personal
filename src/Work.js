/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

/*eslint-enable*/

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
    if(typeof this.props.activeIndex !== 'undefined'){
      this.props.handleSelected(1);
    }
  }

  render() {
    return (
      <div className="container main">
        Work
      </div>
    );
  }
}

ReactDOM.render(<Work />, document.getElementById('root'));
export default Work;