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
      <section className="greeting-container">
        <h1 className="greeting-title"> 
          Hi! I'm Phil. 
          <br></br> I'm a student double-majoring 
          <br></br> in <a rel="noopener noreferrer" href="http://news.psu.edu/story/435574/2016/11/07/administration/ist-scholarship-dinner-honors-students-donors" target="_blank">
            <span className="highlighted">IST</span></a> and <a target="_blank"  rel="noopener noreferrer"href="http://cals.la.psu.edu/news/alchemy-of-nostalgia-the-2017-marathon-read-1"><span className="highlighted">English.</span></a>
          <br></br> Feel free to check out <br></br> some of my <a href="http://philipchwistek.com/work"><span className="highlighted" >work.</span></a> 
        </h1>
        <div className="greeting-subtitle has-text-centered">
          <a className="button is-about" href="https://s3.us-east-2.amazonaws.com/chwistek-files/2017ResumeChwistek.pdf" download="2017ResumeChwistek.pdf"> <span> MY RESUME</span> </a>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('root'));
export default About;