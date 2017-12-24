/*eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Work from './Work'
import Contact from './Contact'
import About from './About'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

/*eslint-enable*/

class Router extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  handleSelected = (index) => this.setState({ activeIndex : index})

  containerSwitch = (index) => ({
    0: 'about-container',
    1: 'work-container',
    2: 'contact-container'
  })[index]

  render() {
    return (
      <BrowserRouter>
        <div className={this.containerSwitch(this.state.activeIndex)}>
          <nav className="navbar is-transparent">
            <Link to="/">
              <div className={this.state.activeIndex=== 0 ? 'navbar-item active': 'navbar-item'} onClick={() => this.handleSelected(0)}>ABOUT</div>
            </Link>
            <Link to="/work">
              <div className={this.state.activeIndex=== 1 ? 'navbar-item active': 'navbar-item'} onClick={() => this.handleSelected(1)}>WORK</div>
            </Link>
            <Link to="/contact">
              <div className={this.state.activeIndex=== 2 ? 'navbar-item active': 'navbar-item'} onClick={() => this.handleSelected(2)}>CONTACT</div>
            </Link>
          </nav>
          <div className="container">
            <Route exact path="/" render={()=><About />}/>
            <Route exact path="/work" render={()=><Work  activeIndex={this.state.activeIndex} handleSelected={this.handleSelected} />}/>
            <Route exact path="/contact" render={()=><Contact />}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
export default Router;