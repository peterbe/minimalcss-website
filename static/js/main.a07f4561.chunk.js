(this["webpackJsonpminimalcss-website"]=this["webpackJsonpminimalcss-website"]||[]).push([[0],{30:function(e,t,s){},35:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),i=s.n(n),c=s(21),a=s.n(c),l=s(7),o=s(8),h=s(10),u=s(9),j=s(11),d=s(2),b=(s(30),s(24)),m=s(22),p=s.n(m),v=(s(34),s(35),s(36),s(16)),O=s.n(v),x=i.a.lazy((function(){return Promise.all([s.e(3),s.e(4)]).then(s.bind(null,45))})),f="https://api.minimalcss.app/minimize",g="https://minimalcss.app";var N=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={result:null,fetching:!1,fetchingUrl:null,errorMessage:null,serverError:!1,previousUrls:JSON.parse(window.sessionStorage.getItem("previousUrls")||"[]"),url:g},e.fetchResult=function(){var t=e.state.url;if(!t.trim())throw new Error("no url");return e.setState((function(){return{fetching:!0,result:null,fetchingUrl:t,errorMessage:null,serverError:!1}})),fetch(f,{method:"POST",body:JSON.stringify({url:t,prettier:!0}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(s){e.setState({fetching:!1}),s.ok?s.json().then((function(s){s.error||200!==s.status_code&&!s.result?e.setState({errorMessage:s.error||"".concat(s.status_code," != 200"),serverError:!1}):e.setState({result:s,errorMessage:null,serverError:!1},(function(){var r=s.result.stylesheetContents,n=0;Object.keys(r).length&&(n=Object.keys(r).map((function(e){return r[e].length})).reduce((function(e,t){return e+t})));var i=s.result.finalCss.length,c={url:t,savings:n-i,time:(new Date).getTime()},a=e.state.previousUrls.filter((function(e){return e.url!==t}));a.unshift(c),e.setState({previousUrls:a},(function(){window.sessionStorage.setItem("previousUrls",JSON.stringify(a))}))}))})):s.json().then((function(t){t&&t.error?e.setState({errorMessage:t.error,serverError:!1}):e.setState({errorMessage:"Server request failure (status=".concat(s.status,")"),serverError:!1})})).catch((function(t){console.log("".concat(s.status," error wasn't JSON")),e.setState({errorMessage:"Server request failure (status=".concat(s.status,")"),serverError:!1})}))})).catch((function(t){e.setState({errorMessage:"API call failed: ".concat(t),serverError:!0})}))},e.submitForm=function(t){t.preventDefault();var s=e.state.url.trim();if(s){var r=e.props.location.pathname;return r+="?url=".concat(encodeURIComponent(s)),e.props.history.push(r),e.fetchResult()}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){if(this.props.location.search){var e=function(e,t){for(var s=e.substring(1,e.length).split("&"),r=0;r<s.length;r++){var n=s[r].split("=");if(decodeURIComponent(n[0])===t)return decodeURIComponent(n[1])}}(this.props.location.search,"url");e&&this.setState({url:e.trim()},this.fetchResult)}}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.state.result&&this.setState({result:null})}},{key:"render",value:function(){var e=this,t=this.state.previousUrls.filter((function(t){return!e.state.fetchingUrl||e.state.fetchingUrl!==t.url}));return Object(r.jsxs)("section",{className:"hero home",children:[Object(r.jsx)("div",{className:"hero-body",children:Object(r.jsx)("div",{className:"container has-text-centered",children:Object(r.jsx)("form",{onSubmit:this.submitForm,children:Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("p",{className:"control is-expanded",children:Object(r.jsx)("input",{className:"input is-medium",type:"url",value:this.state.url,onChange:function(t){e.setState({url:t.target.value},(function(){if(e.state.url.startsWith(g)&&e.state.url!==g)e.setState({url:e.state.url.replace(g,"").trim()});else if((e.state.url.match(/:\/\//g)||[]).length>1){var t=Object(b.a)(e.state.url.matchAll(/http?s:\/\//g)),s=t[t.length-1];e.setState({url:e.state.url.slice(s.index).trim()})}}))},placeholder:"For example. ".concat(g)})}),Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:this.state.fetching?"button is-info is-medium is-loading":"button is-info is-medium",disabled:this.state.fetching,children:"Go!"})})]})})})}),Object(r.jsx)("div",{className:"section main",children:Object(r.jsxs)("div",{className:"container",children:[this.state.fetching||this.state.errorMessage||this.state.result||this.state.previousUrls.length?null:Object(r.jsx)("p",{children:Object(r.jsx)("i",{children:"Waiting for you to submit a URL above to show some cool stuff."})}),this.state.fetching?Object(r.jsx)(k,{}):null,this.state.errorMessage?Object(r.jsx)(S,{message:this.state.errorMessage,serverError:this.state.serverError}):Object(r.jsx)(C,{result:this.state.result})]})}),Object(r.jsx)(y,{previousUrls:t})]})}}]),s}(i.a.PureComponent),y=i.a.memo((function(e){var t=e.previousUrls;return t.length?Object(r.jsx)("div",{className:"section previous-urls",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",style:{textAlign:"left"},children:[Object(r.jsx)("h4",{className:"title is-3",children:"Previous URLs Submitted"}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"overflowing",style:{width:"70%"},children:Object(r.jsx)("a",{href:"/?url=".concat(encodeURIComponent(e.url)),children:e.url})}),Object(r.jsx)("td",{children:Object(r.jsx)("small",{children:Object(r.jsx)(w,{mseconds:(new Date).getTime()-e.time,suffix:"ago"})})}),Object(r.jsxs)("td",{children:["Saving ",M(e.savings)]})]},e.url)}))})})]})})}):null})),w=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={mseconds:0},e._refresh=function(t){window.setTimeout((function(){e.dismounted||(e.setState({mseconds:e.state.mseconds+1e3*t}),window.setTimeout((function(){e._refresh(t)}),1e3*t))}),1e3*t)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this._refresh(10)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this.props.suffix;return"".concat(function(e){var t=Math.floor(e/1e3),s=Math.floor(t/3600);if(s>0)return 1===s?"1 hour":"".concat(s," hours");var r=Math.floor(t/60);return r>0?1===r?"1 minute":"".concat(r," minutes"):"seconds"}(this.state.mseconds)," ").concat(e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{mseconds:e.mseconds}}}]),s}(i.a.PureComponent),S=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h3",{className:"title",children:this.props.serverError?"Server Request Error":"Minimization Error"}),this.props.serverError?null:Object(r.jsxs)("div",{className:"notification is-warning",children:["The request to ",Object(r.jsx)("code",{children:"minimalcss-server"})," worked but the actual minimization work failed."]}),Object(r.jsx)("div",{className:"notification is-danger",children:Object(r.jsx)("pre",{children:this.props.message})})]})}}]),s}(i.a.PureComponent),C=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={showPrettier:!1,copiedToClipboard:!1},e.toggleShowPrettier=function(t){e.setState((function(e){return{showPrettier:!e.showPrettier}}))},e}return Object(o.a)(s,[{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this,t=this.props.result;if(null===t)return null;if(t.error)return Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h3",{className:"title",children:"Error..."}),Object(r.jsx)("div",{className:"notification is-danger",children:Object(r.jsx)("pre",{children:t.error})})]});var s=t.result.stylesheetContents,n=0;Object.keys(s).length&&(n=Object.keys(s).map((function(e){return s[e].length})).reduce((function(e,t){return e+t})));var c=t.result.finalCss.length;return Object(r.jsxs)("div",{className:"box",style:{textAlign:"left"},children:[Object(r.jsx)("h3",{className:"title is-3",children:"Results"}),Object(r.jsxs)("nav",{className:"level",children:[Object(r.jsx)("div",{className:"level-left",children:Object(r.jsxs)("div",{className:"level-item",children:[Object(r.jsx)("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:!this.state.showPrettier,children:"Raw CSS"}),Object(r.jsx)("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:this.state.showPrettier,children:"Pretty CSS"})]})}),Object(r.jsx)("div",{className:"level-right",children:Object(r.jsx)("p",{className:"level-item",children:Object(r.jsx)("button",{className:"button",onClick:function(s){e.state.showPrettier?O()(t.result._prettier):O()(t.result.finalCss),e.setState({copiedToClipboard:!0},(function(){window.setTimeout((function(){e.dismounted||e.setState({copiedToClipboard:!1})}),3e3)}))},children:this.state.copiedToClipboard?"Copied to clipboard":"Copy to clipboard"})})})]}),Object(r.jsx)(p.a,{component:"pre",className:"language-css",children:this.state.showPrettier?t.result._prettier:t.result.finalCss}),Object(r.jsxs)("nav",{className:"level results-level",children:[Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"Total size (before)"}),Object(r.jsx)("p",{className:"title",children:M(n)})]})}),Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"Size (minimal)"}),Object(r.jsx)("p",{className:"title",children:M(c)})]})}),Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"Size reduction"}),Object(r.jsx)("p",{className:"title",children:M(n-c)})]})})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h4",{className:"title is-4",children:"Stylesheets"}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:Object.keys(s).map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:e,children:e})}),Object(r.jsx)("td",{style:{textAlign:"right"},children:Object(r.jsx)("b",{children:M(s[e].length)})})]},e)}))})})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h4",{className:"title is-4",children:"Graphically"}),Object(r.jsx)(i.a.Suspense,{fallback:Object(r.jsx)("p",{children:"Loading graph..."}),children:Object(r.jsx)(x,{newTotalSize:c,stylesheetContents:s})})]})]})}}]),s}(i.a.PureComponent),k=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={waiting:0},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.dismounted||e.setState((function(e){return{waiting:e.waiting+1}}))}),1e3)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0,this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.waiting<1?null:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("p",{children:"Fetching..."}),Object(r.jsxs)("p",{children:["Been waiting for ",this.state.waiting," seconds"]})]})}}]),s}(i.a.PureComponent),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return"0 bytes";var s=1024,r=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(s));return parseFloat((e/Math.pow(s,n)).toFixed(t))+" "+r[n]},U=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"hero-body",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"column is-6 is-offset-3",children:[Object(r.jsxs)("h1",{className:"title has-text-centered",children:["About ",Object(r.jsx)("code",{children:"minimalcss"})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("p",{children:["This is a online version that lets your try the",Object(r.jsxs)("a",{href:"https://www.npmjs.com/package/minimalcss",children:[Object(r.jsx)("code",{children:"minimalcss"})," node package"]}),"."]}),Object(r.jsxs)("p",{children:["Normally you use ",Object(r.jsx)("code",{children:"minimalcss"})," in your server, continous integration or command line tooling to let it extract the minimal CSS a page/URL/site uses but this site let's you try it from the browser.",Object(r.jsx)("br",{}),"Consider everything here experimental and this web app is not part of the core ",Object(r.jsx)("code",{children:"minimalcss"})," project."]}),Object(r.jsx)("h3",{children:Object(r.jsx)(j.b,{to:"/",children:"Go back Home"})})]})]})})})}}]),s}(i.a.Component),P=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={navbarMenu:!1},e.toggleNavbarMenu=function(t){t.preventDefault(),e.setState({navbarMenu:!e.state.navbarMenu})},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(r.jsx)(j.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("section",{className:"hero is-large header-image",children:Object(r.jsx)("div",{className:"hero-head",children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)("h1",{className:"brand-title",children:Object(r.jsx)(j.c,{className:"navbar-item",to:"/",children:Object(r.jsx)("code",{children:"minimalcss"})})}),Object(r.jsxs)("span",{onClick:this.toggleNavbarMenu,className:this.state.navbarMenu?"navbar-burger burger is-active":"navbar-burger burger","data-target":"navbarMenu",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]}),Object(r.jsx)("div",{id:"navbarMenu",className:this.state.navbarMenu?"navbar-menu is-active":"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-end",children:[Object(r.jsx)(j.c,{to:"/",className:"navbar-item",activeClassName:"is-active",exact:!0,children:"Home"}),Object(r.jsx)(j.c,{to:"/about",className:"navbar-item",activeClassName:"is-active",children:"About minimalcss"}),Object(r.jsx)("span",{className:"navbar-item",children:Object(r.jsx)("a",{className:"button is-white is-outlined is-small",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/peterbe/minimalcss-website",children:Object(r.jsx)("span",{children:"View Source"})})})]})})]})})})}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/",exact:!0,component:N}),Object(r.jsx)(d.a,{path:"/about",component:U}),Object(r.jsx)(d.a,{component:E})]}),Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"content has-text-centered",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"https://github.com/peterbe/minimalcss-website",children:"minimalcss-website"})," ","uses"," ",Object(r.jsx)("a",{href:"https://github.com/peterbe/minimalcss-server",children:"minimalcss-server"})," ","which uses"," ",Object(r.jsx)("a",{href:"https://github.com/peterbe/minimalcss",children:"minimalcss"})," ","by ",Object(r.jsx)("a",{href:"https://www.peterbe.com",children:"@peterbe"})," and"," ",Object(r.jsx)("a",{href:"https://twitter.com/stereobooster",children:"@stereobooster"}),"."]}),Object(r.jsxs)("p",{children:["Site design by ",Object(r.jsx)("a",{href:"https://bulma.io/",children:"Bulma"})," and"," ",Object(r.jsx)("a",{href:"http://html.mijnspeelplek.com/bulma1/",children:"Bulma Templates"})]})]})})})]})})}}]),s}(i.a.Component);function E(e){var t=e.location;return Object(r.jsx)("div",{children:Object(r.jsxs)("h3",{children:["No match for ",Object(r.jsx)("code",{children:t.pathname})]})})}s(40);a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a07f4561.chunk.js.map