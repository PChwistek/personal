/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
/*eslint-disable*/



class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {name: 'SERVICEDOCK', keywords: ['DATA VISUALIZATION']}, 
        {name: 'CLAIRVOYANCE', keywords: ['ETHEREUM', 'SMART CONTRACTS', 'REACT']}, 
        {name: 'EQUITYHERMIT', keywords: ['DATA VISUALIZATION']}, 
        {name: 'PHILIPCHWISTEK.COM', keywords:['PORTFOLIO', 'REACT']}
      ],
      activeIndex: null
    };
    if(typeof this.props.activeIndex !== 'undefined'){
      this.props.handleSelected(1);
    }
  }

  handleSelected = (index) => {
    this.setState({ activeIndex : index});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container tiles">
          <div className="columns">
            <div className="column">
              <Link to="/work/servicedock">
                <WorkTile project={this.state.projects[0].name} keywords={this.state.projects[0].keywords} sourceOpen={false} 
                  onClick={this.handleSelected} active={this.state.activeIndex === '0'} />
              </Link>
            </div>
            <div className="column">
              <Link to="/work/clairvoyance">
                <WorkTile project={this.state.projects[1].name} keywords={this.state.projects[1].keywords} sourceOpen={true} link={'https://github.com/PChwistek/Clairvoyance'} 
                  onClick={this.handleSelected} active={this.state.activeIndex === '1'} />
              </Link>
            </div>
            <div className="column">
              <Link to="/work/equityhermit">
                <WorkTile project={this.state.projects[2].name} keywords={this.state.projects[2].keywords} sourceOpen={false} 
                  onClick={this.handleSelected} active={this.state.activeIndex === '2'}/>
              </Link>
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
              <Link to="/work/personal">
                <WorkTile project={this.state.projects[3].name} keywords={this.state.projects[3].keywords} sourceOpen={true} link={'https://github.com/PChwistek/personal'} 
                  onClick={this.handleSelected} active={this.state.activeIndex === '3'}/>
              </Link>
            </div>
          </div>
          <div className="container">
            <Route exact path="/work/servicedock" render={()=><ServiceDock />}/>
            <Route exact path="/work/clairvoyance" render={()=><Clairvoyance  activeIndex={this.state.activeIndex} handleSelected={this.handleSelected} />}/>
            <Route exact path="/work/equityhermit" render={()=><EquityHermit />}/>
            <Route exact path="/work/personal" render={()=><Personal />}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

/* eslint-disable */

var ServiceDockText = "The purpose of this dashboard is to present customer feedback in a manageable way (specifically for retail franchises). Clicking on a graph category presents a list of free-form responses that were provided by that selected demographic.";
var ClairvoyanceText ="I completed this side-project to learn more about Ethereum smart contracts and the Ethereum development stack.";
var EquityHermitText ="A project in the making, I intend for this website to help visualize the fundamentals of publically-traded companies (balance sheets, market cap, etc.).";
var PersonalText ="I created this website to present my body of work. You're on it right now!";

const KeywordList = ({items}) => (
  <ul> 
    {items.map(item => <li><span className="work-keyword">{item}</span></li>)} 
  </ul>
);

const ServiceDock = () => (
  <div className="cards">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <Card title={'ServiceDock Dashboard'} text={ServiceDockText} image={'https://s3.us-east-2.amazonaws.com/chwistek-files/servicedock5_thumbnail.png'} imageList={['https://s3.us-east-2.amazonaws.com/chwistek-files/servicedock2.png', 
          'https://s3.us-east-2.amazonaws.com/chwistek-files/servicedock3.png',
          'https://s3.us-east-2.amazonaws.com/chwistek-files/servicedock4.png',
          'https://s3.us-east-2.amazonaws.com/chwistek-files/servicedock5.png']}/>
      </div>
    </div>
  </div>

);


const Clairvoyance = () => (
  <div className="cards">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <Card title={'Clairvoyance'} text={ClairvoyanceText} image={'https://s3.us-east-2.amazonaws.com/chwistek-files/c1._thumbnail.png'} imageList={['https://s3.us-east-2.amazonaws.com/chwistek-files/c1.png', 
          'https://s3.us-east-2.amazonaws.com/chwistek-files/c2.png',
          'https://s3.us-east-2.amazonaws.com/chwistek-files/c3.png']}  />
      </div>
    </div>
  </div>
);


const EquityHermit = () => (
  <div className="cards">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <Card title={'EquityHermit Wireframe'} text={EquityHermitText} image={'https://s3.us-east-2.amazonaws.com/chwistek-files/equity_hermit.png'} 
          imageList={['https://s3.us-east-2.amazonaws.com/chwistek-files/equity_hermit.png']}/>
      </div>
    </div>
  </div>
);


const Personal = () => (
  <div className="cards">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <Card title={'Personal Portfolio'} text={PersonalText} image={'https://s3.us-east-2.amazonaws.com/chwistek-files/personal_thumbnail.png'} imageList={['https://s3.us-east-2.amazonaws.com/chwistek-files/personal.png']}/>
      </div>
    </div>
  </div>
);

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      currentPhoto: 0
    };
  }

  closeModal() {
    this.setState({modalActive: false});
  }

  handleNext() {
    if(this.state.currentPhoto >= this.props.imageList.length-1){
      this.setState({currentPhoto: 0});
    } else {
      this.setState({currentPhoto: this.state.currentPhoto += 1});
    }
  }

  handleBack() {
    if(this.state.currentPhoto == 0){
      this.setState({currentPhoto: this.props.imageList.length-1});
    } else {
      this.setState({currentPhoto: this.state.currentPhoto -= 1});
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.image} alt="Placeholder image"></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content has-text-centered">
              <p className="title">{this.props.title}</p>
            </div>
          </div>
          <div className="content has-text-left">
            {this.props.text}
          </div>
          <a className="button" onClick={() => this.setState({modalActive: true})}> Launch Gallery </a>
        </div>
        <div className={this.state.modalActive ? "modal is-active": "modal"}>
          <div className="modal-background"></div>
          {typeof this.props.imageList !== 'undefined' && this.props.imageList.length > 1 ?
            <a className="button modal-back" onClick={() => this.handleBack()}>Back</a>: 
            null
          }
          <div className="modal-content">
            {typeof this.props.imageList !=='undefined'?
              <img src={this.props.imageList[this.state.currentPhoto]} alt=""></img> :
              null
            }
          </div>
          {typeof this.props.imageList !== 'undefined' && this.props.imageList.length > 1 ? 
            <a className="button modal-next" onClick={() => this.handleNext()} >Next</a> :
            null
          }
          <button className="modal-close is-large" aria-label="close" onClick={() => this.closeModal()}></button>
        </div>
      </div>
    );
  }
}

const tileSwitch = (project) => ({
  'SERVICEDOCK': '0',
  'CLAIRVOYANCE': '1',
  'EQUITYHERMIT': '2',
  'PHILIPCHWISTEK.COM': '3'
})[project];

const WorkTile = ({project, keywords, sourceOpen, link, onClick, active}) => {
  typeof keywords !== 'undefined' ? this.keywords = keywords : keywords = [];

  return (
    <div className="" onClick={() => onClick(tileSwitch(project))}>
      <div className={active ? 'tile is-grey work-active': 'tile is-grey work-tile'}>
        <p className="work-title">{project}</p>
        <KeywordList items={keywords} />
        {sourceOpen ? (
          <span className="icon">
            <a href={link} rel="noopener noreferrer" target="_blank"><i className="fa fa-github work-icon"></i></a>
          </span>): 
          <span className="icon"><i className="fa fa-github work-icon no-link"></i></span>
        }
      </div>
    </div> 
  );
};

/* eslint-enable */
ReactDOM.render(<WorkTile />, document.getElementById('root'));
ReactDOM.render(<Card />, document.getElementById('root'));
ReactDOM.render(<Work />, document.getElementById('root'));
export default Work;