import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <div className="column is-6 is-offset-3">
            <h1 className="title has-text-centered">
              About <code>minimalcss</code>
            </h1>
            <div className="box">
              <p>
                This is a online version that lets your try the
                <a href="https://www.npmjs.com/package/minimalcss">
                  <code>minimalcss</code> node package
                </a>.
              </p>
              <p>
                Normally you use <code>minimalcss</code> in your server,
                continous integration or command line tooling to let it extract
                the minimal CSS a page/URL/site uses but this site let's you try
                it from the browser.
                <br />
                Consider everything here experimental and this web app is not
                part of the core <code>minimalcss</code> project.
              </p>
              <h3>
                <Link to="/">Go back Home</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
