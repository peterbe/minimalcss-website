import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  state = {
    navbarMenu: false
  };

  toggleNavbarMenu = event => {
    event.preventDefault();
    this.setState({ navbarMenu: !this.state.navbarMenu });
  };

  render() {
    return (
      <Router>
        <div>
          <section className="hero is-large header-image">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <h1 className="brand-title">
                      <NavLink className="navbar-item" to="/">
                        <code>minimalcss</code>
                      </NavLink>
                    </h1>

                    <span
                      onClick={this.toggleNavbarMenu}
                      className={
                        this.state.navbarMenu
                          ? "navbar-burger burger is-active"
                          : "navbar-burger burger"
                      }
                      data-target="navbarMenu"
                    >
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  <div
                    id="navbarMenu"
                    className={
                      this.state.navbarMenu
                        ? "navbar-menu is-active"
                        : "navbar-menu"
                    }
                  >
                    <div className="navbar-end">
                      <NavLink
                        to="/"
                        className="navbar-item"
                        activeClassName="is-active"
                        exact={true}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/about"
                        className="navbar-item"
                        activeClassName="is-active"
                      >
                        About minimalcss
                      </NavLink>
                      <span className="navbar-item">
                        <a
                          className="button is-white is-outlined is-small"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/peterbe/minimalcss-website"
                        >
                          {/* <span className="icon">
                            <i className="fa fa-github" />
                          </span> */}
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
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>

          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <a href="https://github.com/peterbe/minimalcss-website">
                    minimalcss-website
                  </a>{" "}
                  uses{" "}
                  <a href="https://github.com/peterbe/minimalcss-server">
                    minimalcss-server
                  </a>{" "}
                  which uses{" "}
                  <a href="https://github.com/peterbe/minimalcss">minimalcss</a>{" "}
                  by <a href="https://www.peterbe.com">@peterbe</a> and{" "}
                  <a href="https://twitter.com/stereobooster">@stereobooster</a>
                  .
                </p>
                <p>
                  Site design by <a href="https://bulma.io/">Bulma</a> and{" "}
                  <a href="http://html.mijnspeelplek.com/bulma1/">
                    Bulma Templates
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

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
