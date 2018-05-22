import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // fetching: true
    };
  }

  toggleNavbarMenu = event => {
    event.preventDefault();
    console.log('work harder');
  };

  render() {
    return (
      <Router>
        <div>
          <section className="hero is-primary is-large header-image">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <h1 className="brand-title">
                      <NavLink className="navbar-item" to="/">
                        Try <code>minimalcss</code>
                      </NavLink>
                    </h1>

                    <span
                      onClick={this.toggleNavbarMenu}
                      className="navbar-burger burger"
                      data-target="navbarMenu"
                    >
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                      <NavLink to="/" className="navbar-item is-active">
                        Home
                      </NavLink>
                      <NavLink to="/about" className="navbar-item">
                        About minimalcss
                      </NavLink>
                      <span className="navbar-item">
                        <a
                          className="button is-white is-outlined is-small"
                          href="https://github.com/peterbe/minimalcss-heroku"
                        >
                          <span className="icon">
                            <i className="fa fa-github" />
                          </span>
                          <span>View Source</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Redirect from="/old-match" to="/will-match"/> */}
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>

          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>
                    <code>minimalcss</code>
                  </strong>{' '}
                  by <a href="https://www.peterbe.com">Peter Bengtsson</a>. Site
                  design by <a href="https://bulma.io/">Bulma</a> and{' '}
                  <a href="http://html.mijnspeelplek.com/bulma1/">
                    Bulma Templates
                  </a>
                </p>
                <p>
                  <a
                    className="icon"
                    href="https://github.com/peterbe/minimalcss"
                  >
                    <i className="fa fa-github" />
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
