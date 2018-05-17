/*eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Work from './Work'
import Contact from './Contact'
import About from './About'

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

/*eslint-disable*/

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
            <NavLink exact to="/">
              <div activeClassName='active' className='navbar-item' onClick={() => this.handleSelected(0)}>ABOUT</div>
            </NavLink>
            <NavLink to="/work">
              <div activeClassName='active' className='navbar-item' onClick={() => this.handleSelected(1)}>WORK</div>
            </NavLink>
            <NavLink to="/contact">
              <div activeClassName='active' className='navbar-item' onClick={() => this.handleSelected(2)}>CONTACT</div>
            </NavLink>
          </nav>
          <div className="container">
          <Switch>
            <Route exact path="/" render={()=><About />}/>
            <Route path="/work" render={()=><Work  activeIndex={this.state.activeIndex} handleSelected={this.handleSelected} />}/>
            <Route exact path="/contact" render={()=><Contact activeIndex={this.state.activeIndex} handleSelected={this.handleSelected}/>}/>
            <Route render={() => {return (<p> Not found </p>)}} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
export default Router;