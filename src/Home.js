import React from 'react';
import PrismCode from 'react-prism';
// eslint-disable-next-line
import { Prism } from 'prismjs';
import './Home.css';
import 'prismjs/themes/prism-tomorrow.css';

function getQueryVariable(query, variable) {
  var vars = query.substring(1, query.length).split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fetching: false,
      errorMessage: null
    };
  }

  componentDidMount() {
    if (this.props.location.search) {
      const url = getQueryVariable(this.props.location.search, 'url');
      if (url) {
        this.refs.url.value = url;
        this.fetchResult(url);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // will be true
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged && this.state.result) {
      this.setState({ result: null });
    }
    // console.log('locationChanged', locationChanged);
  }

  fetchResult = url => {
    if (!url.trim()) {
      throw new Error('no url');
    }
    this.setState(prevState => ({
      fetching: true,
      result: null
    }));
    return fetch('/api/minimize', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log('JSON:', json);
            this.setState({
              result: json,
              fetching: false,
              errorMessage: null
            });
          });
        } else {
          console.log('Setting message');
          this.setState({
            errorMessage: `Server request failure (status=${response.status})`,
            fetching: false
          });
        }
      })
      .catch(e => {
        this.setState({
          errorMessage: `API call failed: ${e}`,
          fetching: false
        });
      });
  };

  submitForm = event => {
    event.preventDefault();
    const url = this.refs.url.value.trim();
    if (!url) {
      return;
    }
    let newPath = this.props.location.pathname;
    newPath += `?url=${encodeURIComponent(url)}`;
    this.props.history.push(newPath);
    return this.fetchResult(url);
  };
  render() {
    return (
      <div>
        <div className="hero-cta">
          <nav className="level">
            <div className="level-item has-text-centered">
              {/* <p>Enter the URL of a site that has a lot of CSS</p> */}
              <form
                method="get"
                onSubmit={this.submitForm}
                style={{ width: '55%' }}
              >
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      className="input is-medium"
                      type="url"
                      ref="url"
                      defaultValue="https://news.ycombinator.com"
                      placeholder="For example. http://localhost:3000"
                    />
                  </p>
                  <p className="control">
                    <button
                      type="submit"
                      className={
                        this.state.fetching
                          ? 'button is-info is-medium is-loading'
                          : 'button is-info is-medium'
                      }
                      disabled={this.state.fetching}
                    >
                      Go!
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </nav>
        </div>
        <div className="section main">
          <div className="container">
            {this.state.fetching ? <DisplayFetching /> : null}
            {this.state.errorMessage ? (
              <DisplayErrorMessage message={this.state.errorMessage} />
            ) : (
              <DisplayResult result={this.state.result} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

class DisplayErrorMessage extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <h3 className="title">Server Request Error</h3>
        <div className="notification is-danger">
          <pre>{this.props.message}</pre>
        </div>
      </div>
    );
  }
}

class DisplayResult extends React.PureComponent {
  state = { showPrettier: false };

  toggleShowPrettier = event => {
    this.setState(prevState => ({
      showPrettier: !prevState.showPrettier
    }));
  };

  render() {
    const { result } = this.props;
    if (result === null) {
      return null;
    }
    if (result.error) {
      return (
        <div className="box">
          <h3 className="title">Error...</h3>
          <div className="notification is-danger">
            <pre>{result.error}</pre>
          </div>
        </div>
      );
    }
    const stylesheetContents = result.result.stylesheetContents;
    let previousTotalSize = 0;
    if (Object.keys(stylesheetContents).length) {
      previousTotalSize = Object.keys(stylesheetContents)
        .map(k => {
          return stylesheetContents[k].length;
        })
        .reduce((a, b) => a + b);
    }
    const newTotalSize = result.result.finalCss.length;

    return (
      <div className="box" style={{ textAlign: 'left' }}>
        <h3 className="title is-3">Results</h3>
        <div className="buttons">
          <button
            type="button"
            className="button is-rounded"
            onClick={this.toggleShowPrettier}
            disabled={!this.state.showPrettier}
          >
            Raw CSS
          </button>
          <button
            type="button"
            className="button is-rounded"
            onClick={this.toggleShowPrettier}
            disabled={this.state.showPrettier}
          >
            Pretty CSS
          </button>
        </div>

        {/* XXX this is ugly */}
        <PrismCode component="pre" className="language-css">
          {this.state.showPrettier
            ? result.result._prettier
            : result.result.finalCss}
        </PrismCode>

        <div className="content">
          <table className="table">
            <tbody>
              <tr>
                <th>Took</th>
                <td>{formatTime(result.result._took)}</td>
              </tr>
              <tr>
                <th>Size (minimal)</th>
                <td>
                  <strong>{formatSize(newTotalSize)}</strong>
                </td>
              </tr>
              <tr>
                <th>Total size (before)</th>
                <td>{formatSize(previousTotalSize)}</td>
              </tr>
              <tr>
                <th>Size reduction</th>
                <td>
                  <strong>
                    {formatSize(previousTotalSize - newTotalSize)}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content">
          <h4 className="title is-4">Stylesheets</h4>
          <table className="table">
            <tbody>
              {Object.keys(stylesheetContents).map(url => {
                return (
                  <tr key={url}>
                    <td>
                      <a href={url}>{url}</a>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <b>{formatSize(stylesheetContents[url].length)}</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class DisplayFetching extends React.PureComponent {
  state = { waiting: 0 };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.dismounted) return;

      this.setState(prevState => ({
        waiting: prevState.waiting + 1
      }));
    }, 1000);
  }
  componentWillUnmount() {
    this.dismounted = true;
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    if (this.state.waiting < 1) {
      return null;
    }
    return (
      <div className="box">
        <p>Fetching...</p>
        <p>Been waiting for {this.state.waiting} seconds</p>
      </div>
    );
  }
}

function formatTime(ms) {
  if (ms > 1000) {
    const s = ms / 1000;
    return `${s.toFixed(2)} seconds`;
  }
  return `${ms.toFixed(2)} milliseconds`;
}

const formatSize = (bytes, decimals = 0) => {
  if (!bytes) return '0 bytes';
  const k = 1024;
  const dm = decimals + 1 || 3;
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
