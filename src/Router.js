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

const routes = [
  
  { 
    path: '/',
    exact: true,
    main: () => <About />
  },
  {
    path: '/work',
    main: () => <Work />,
  },
  {
    path: '/contact',
    main: () => <Contact />,
  }
];

class Router extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  handleSelected = (index) => this.setState({ activeIndex : index})

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar">
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
          <div className="container main">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<Router />, document.getElementById('root'));
export default Router;