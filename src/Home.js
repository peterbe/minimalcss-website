import React from "react";
import PrismCode from "react-prism";
// eslint-disable-next-line
import { Prism } from "prismjs";
import "./Home.css";
import "prismjs/themes/prism-tomorrow.css";
import cssbeautify from "cssbeautify";
import copy from "copy-to-clipboard";

const MINIMIZE_URL = process.env.REACT_APP_ABSOLUTE_API_URL || "/minimize";

function getQueryVariable(query, variable) {
  var vars = query.substring(1, query.length).split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

function humanizeSeconds(mseconds) {
  const seconds = Math.floor(mseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  if (hours > 0) {
    return hours === 1 ? "1 hour" : `${hours} hours`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes > 0) {
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  }
  return "seconds ago";
  // return minutes === 1 ? "1 second" : `${seconds} seconds`;
}

class Home extends React.PureComponent {
  state = {
    result: null,
    fetching: false,
    fetchingUrl: null,
    errorMessage: null,
    serverError: false,
    previousUrls: JSON.parse(
      window.sessionStorage.getItem("previousUrls") || "[]"
    )
  };

  componentDidMount() {
    if (this.props.location.search) {
      const url = getQueryVariable(this.props.location.search, "url");
      if (url) {
        this.refs.url.value = url;
        this.fetchResult(url);
      }
    }
  }

  // XXX Switch to getDerivedStateFromProps
  componentWillReceiveProps(nextProps) {
    // will be true
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged && this.state.result) {
      this.setState({ result: null });
    }
  }

  fetchResult = url => {
    if (!url.trim()) {
      throw new Error("no url");
    }
    this.setState(prevState => ({
      fetching: true,
      result: null,
      fetchingUrl: url
    }));
    return fetch(MINIMIZE_URL, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            if (json.error) {
              this.setState({
                fetching: false,
                errorMessage: json.error,
                serverError: false
              });
            } else {
              const beautified = cssbeautify(json.result.finalCss, {
                indent: "  ",
                // openbrace: "separate-line",
                autosemicolon: true
              });
              json.result._prettier = beautified;

              this.setState(
                {
                  result: json,
                  fetching: false,
                  errorMessage: null,
                  serverError: false
                },
                () => {
                  const stylesheetContents = json.result.stylesheetContents;
                  let previousTotalSize = 0;
                  if (Object.keys(stylesheetContents).length) {
                    previousTotalSize = Object.keys(stylesheetContents)
                      .map(k => {
                        return stylesheetContents[k].length;
                      })
                      .reduce((a, b) => a + b);
                  }
                  const newTotalSize = json.result.finalCss.length;
                  const item = {
                    url,
                    savings: previousTotalSize - newTotalSize,
                    time: new Date().getTime()
                  };
                  const previous = this.state.previousUrls.filter(each => {
                    return each.url !== url;
                  });
                  previous.unshift(item);
                  this.setState({ previousUrls: previous }, () => {
                    window.sessionStorage.setItem(
                      "previousUrls",
                      JSON.stringify(previous)
                    );
                  });
                }
              );
            }
          });
        } else {
          this.setState({
            errorMessage: `Server request failure (status=${response.status})`,
            serverError: false,
            fetching: false
          });
        }
      })
      .catch(e => {
        this.setState({
          errorMessage: `API call failed: ${e}`,
          serverError: true,
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
    const previousUrls = this.state.previousUrls.filter(each => {
      return !this.state.fetchingUrl || this.state.fetchingUrl !== each.url;
    });
    return (
      <section className="hero home">
        <div className="hero-body">
          <div className="container has-text-centered">
            {/* <p>Enter the URL of a site that has a lot of CSS</p> */}
            <form onSubmit={this.submitForm}>
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
                        ? "button is-info is-medium is-loading"
                        : "button is-info is-medium"
                    }
                    disabled={this.state.fetching}
                  >
                    Go!
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="section main">
          <div className="container">
            {!(
              this.state.fetching ||
              this.state.errorMessage ||
              this.state.result ||
              this.state.previousUrls.length
            ) ? (
              <p>
                <i>
                  Waiting for you to submit a URL above to show some cool stuff.
                </i>
              </p>
            ) : null}
            {this.state.fetching ? <DisplayFetching /> : null}
            {this.state.errorMessage ? (
              <DisplayErrorMessage
                message={this.state.errorMessage}
                serverError={this.state.serverError}
              />
            ) : (
              <DisplayResult result={this.state.result} />
            )}
          </div>
        </div>

        <DisplayPreviousUrls previousUrls={previousUrls} />
      </section>
    );
  }
}

export default Home;

class DisplayPreviousUrls extends React.PureComponent {
  render() {
    const { previousUrls } = this.props;
    if (!previousUrls.length) {
      return null;
    }
    return (
      <div className="section previous-urls">
        <div className="container">
          <div className="box" style={{ textAlign: "left" }}>
            <h4 className="title is-3">Previous URLs Submitted</h4>
            <table className="table">
              <tbody>
                {previousUrls.map(previous => {
                  return (
                    <tr key={previous.url}>
                      <td className="overflowing" style={{ width: "70%" }}>
                        <a href={`/?url=${encodeURIComponent(previous.url)}`}>
                          {previous.url}
                        </a>
                      </td>
                      <td>
                        <small>
                          <ShowSeconds
                            mseconds={new Date().getTime() - previous.time}
                            suffix="ago"
                          />
                        </small>
                      </td>
                      <td>Saving {formatSize(previous.savings)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

class ShowSeconds extends React.PureComponent {
  state = {
    mseconds: 0
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return { mseconds: nextProps.mseconds };
  }
  _refresh = seconds => {
    window.setTimeout(() => {
      if (!this.dismounted) {
        this.setState({ mseconds: this.state.mseconds + seconds * 1000 });
        window.setTimeout(() => {
          this._refresh(seconds);
        }, seconds * 1000);
      }
    }, seconds * 1000);
  };
  componentDidMount() {
    this._refresh(10);
  }
  componentWillUnmount() {
    this.dismounted = true;
  }
  render() {
    const { suffix } = this.props;
    return `${humanizeSeconds(this.state.mseconds)} ${suffix}`;
  }
}

class DisplayErrorMessage extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <h3 className="title">
          {this.props.serverError
            ? "Server Request Error"
            : "Minimization Error"}
        </h3>
        {!this.props.serverError ? (
          <div className="notification is-warning">
            The request to <code>minimalcss-server</code> worked but the actual
            minimization work failed for some reason.
          </div>
        ) : null}
        <div className="notification is-danger">
          <pre>{this.props.message}</pre>
        </div>
      </div>
    );
  }
}

class DisplayResult extends React.PureComponent {
  state = { showPrettier: false, copiedToClipboard: false };
  componentWillUnmount() {
    this.dismounted = true;
  }

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
      <div className="box" style={{ textAlign: "left" }}>
        <h3 className="title is-3">Results</h3>

        <nav className="level">
          <div className="level-left">
            <div className="level-item">
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
          </div>

          <div className="level-right">
            <p className="level-item">
              <button
                className="button"
                onClick={event => {
                  if (this.state.showPrettier) {
                    copy(result.result._prettier);
                  } else {
                    copy(result.result.finalCss);
                  }
                  this.setState({ copiedToClipboard: true }, () => {
                    window.setTimeout(() => {
                      if (!this.dismounted) {
                        this.setState({ copiedToClipboard: false });
                      }
                    }, 3000);
                  });
                }}
              >
                {this.state.copiedToClipboard
                  ? "Copied to clipboard"
                  : "Copy to clipboard"}
              </button>
            </p>
          </div>
        </nav>

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
                    <td style={{ textAlign: "right" }}>
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
  if (!bytes) return "0 bytes";
  const k = 1024;
  const dm = decimals + 1 || 3;
  const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
