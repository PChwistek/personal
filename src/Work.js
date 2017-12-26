/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css';

/*eslint-enable*/

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {name: 'SERVICEDOCK', keywords: ['DATA VISUALIZATION']}, 
        {name: 'CLAIRVOYANCE', keywords: ['ETHEREUM', 'SMART CONTRACTS', 'REACT']}, 
        {name: 'EQUITYHERMIT', keywords: ['DATA VISUALIZATION']}, 
        {name: 'PHILIPCHWISTEK.COM', keywords:['PORTFOLIO', 'REACT']}
      ]
    };
    if(typeof this.props.activeIndex !== 'undefined'){
      this.props.handleSelected(1);
    }
  }

  render() {
    return (
      <div className="container is-fluid tiles">
        <div className="columns">
          <WorkTile project={this.state.projects[0].name} keywords={this.state.projects[0].keywords} />
          <WorkTile project={this.state.projects[1].name} keywords={this.state.projects[1].keywords} />
          <WorkTile project={this.state.projects[2].name} keywords={this.state.projects[2].keywords} />
        </div>
        <div className="columns has-text-centered">
          <WorkTile project={this.state.projects[3].name} keywords={this.state.projects[3].keywords}/>
        </div>
      </div>
    );
  }
}

/* eslint-disable */


const KeywordList = ({items}) => (
  <ul> 
    {items.map(item => <li><span className="work-keyword">{item}</span>  </li>)} 
  </ul>

);

const WorkTile = ({project, keywords, link}) => {
  typeof keywords !== 'undefined' ? this.keywords = keywords : keywords = [];
  return (
    <div className="column">
      <div className="tile is-grey work-tile">
        <p className="work-title">{project}</p>
        <KeywordList items={keywords} />
      </div>
    </div> 
  );
}

/* eslint-enable */
ReactDOM.render(<WorkTile />, document.getElementById('root'));

ReactDOM.render(<Work />, document.getElementById('root'));
export default Work;