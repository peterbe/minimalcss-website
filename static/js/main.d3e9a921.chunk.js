(window["webpackJsonpminimalcss-website"]=window["webpackJsonpminimalcss-website"]||[]).push([[0],{28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),i=a(4),o=a(5),c=a(7),u=a(6),m=a(8),h=a(11),d=a(10),f=(a(33),a(27)),p=a(22),v=a.n(p),b=(a(37),a(23)),E=a.n(b),g=(a(40),a(41),a(24)),w=a.n(g),y=a(14),N=a.n(y),k="https://api.minimalcss.app/minimize",j="https://minimalcss.app";var O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={result:null,fetching:!1,fetchingUrl:null,errorMessage:null,serverError:!1,previousUrls:JSON.parse(window.sessionStorage.getItem("previousUrls")||"[]"),url:j},a.fetchResult=function(){var e=a.state.url;if(!e.trim())throw new Error("no url");return a.setState(function(t){return{fetching:!0,result:null,fetchingUrl:e,errorMessage:null,serverError:!1}}),fetch(k,{method:"POST",body:JSON.stringify({url:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){a.setState({fetching:!1}),t.ok?t.json().then(function(t){if(t.error)a.setState({errorMessage:t.error,serverError:!1});else{var n=w()(t.result.finalCss,{indent:"  ",autosemicolon:!0});t.result._prettier=n,a.setState({result:t,errorMessage:null,serverError:!1},function(){var n=t.result.stylesheetContents,r=0;Object.keys(n).length&&(r=Object.keys(n).map(function(e){return n[e].length}).reduce(function(e,t){return e+t}));var s=t.result.finalCss.length,l={url:e,savings:r-s,time:(new Date).getTime()},i=a.state.previousUrls.filter(function(t){return t.url!==e});i.unshift(l),a.setState({previousUrls:i},function(){window.sessionStorage.setItem("previousUrls",JSON.stringify(i))})})}}):a.setState({errorMessage:"Server request failure (status=".concat(t.status,")"),serverError:!1})}).catch(function(e){a.setState({errorMessage:"API call failed: ".concat(e),serverError:!0})})},a.submitForm=function(e){e.preventDefault();var t=a.state.url.trim();if(t){var n=a.props.location.pathname;return n+="?url=".concat(encodeURIComponent(t)),a.props.history.push(n),a.fetchResult()}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(this.props.location.search){var e=function(e,t){for(var a=e.substring(1,e.length).split("&"),n=0;n<a.length;n++){var r=a[n].split("=");if(decodeURIComponent(r[0])===t)return decodeURIComponent(r[1])}}(this.props.location.search,"url");e&&this.setState({url:e.trim()},this.fetchResult)}}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.state.result&&this.setState({result:null})}},{key:"render",value:function(){var e=this,t=this.state.previousUrls.filter(function(t){return!e.state.fetchingUrl||e.state.fetchingUrl!==t.url});return r.a.createElement("section",{className:"hero home"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{className:"input is-medium",type:"url",value:this.state.url,onChange:function(t){e.setState({url:t.target.value},function(){if(e.state.url.startsWith(j)&&e.state.url!==j)e.setState({url:e.state.url.replace(j,"").trim()});else if((e.state.url.match(/:\/\//g)||[]).length>1){var t=Object(f.a)(e.state.url.matchAll(/http?s:\/\//g)),a=t[t.length-1];e.setState({url:e.state.url.slice(a.index).trim()})}})},placeholder:"For example. ".concat(j)})),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"submit",className:this.state.fetching?"button is-info is-medium is-loading":"button is-info is-medium",disabled:this.state.fetching},"Go!")))))),r.a.createElement("div",{className:"section main"},r.a.createElement("div",{className:"container"},this.state.fetching||this.state.errorMessage||this.state.result||this.state.previousUrls.length?null:r.a.createElement("p",null,r.a.createElement("i",null,"Waiting for you to submit a URL above to show some cool stuff.")),this.state.fetching?r.a.createElement(P,null):null,this.state.errorMessage?r.a.createElement(x,{message:this.state.errorMessage,serverError:this.state.serverError}):r.a.createElement(M,{result:this.state.result}))),r.a.createElement(S,{previousUrls:t}))}}]),t}(r.a.PureComponent),S=r.a.memo(function(e){var t=e.previousUrls;return t.length?r.a.createElement("div",{className:"section previous-urls"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box",style:{textAlign:"left"}},r.a.createElement("h4",{className:"title is-3"},"Previous URLs Submitted"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.url},r.a.createElement("td",{className:"overflowing",style:{width:"70%"}},r.a.createElement("a",{href:"/?url=".concat(encodeURIComponent(e.url))},e.url)),r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement(C,{mseconds:(new Date).getTime()-e.time,suffix:"ago"}))),r.a.createElement("td",null,"Saving ",T(e.savings)))})))))):null}),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mseconds:0},a._refresh=function(e){window.setTimeout(function(){a.dismounted||(a.setState({mseconds:a.state.mseconds+1e3*e}),window.setTimeout(function(){a._refresh(e)},1e3*e))},1e3*e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this._refresh(10)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this.props.suffix;return"".concat(function(e){var t=Math.floor(e/1e3),a=Math.floor(t/3600);if(a>0)return 1===a?"1 hour":"".concat(a," hours");var n=Math.floor(t/60);return n>0?1===n?"1 minute":"".concat(n," minutes"):"seconds"}(this.state.mseconds)," ").concat(e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{mseconds:e.mseconds}}}]),t}(r.a.PureComponent),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title"},this.props.serverError?"Server Request Error":"Minimization Error"),this.props.serverError?null:r.a.createElement("div",{className:"notification is-warning"},"The request to ",r.a.createElement("code",null,"minimalcss-server")," worked but the actual minimization work failed for some reason."),r.a.createElement("div",{className:"notification is-danger"},r.a.createElement("pre",null,this.props.message)))}}]),t}(r.a.PureComponent),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showPrettier:!1,copiedToClipboard:!1},a.toggleShowPrettier=function(e){a.setState(function(e){return{showPrettier:!e.showPrettier}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this,t=this.props.result;if(null===t)return null;if(t.error)return r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title"},"Error..."),r.a.createElement("div",{className:"notification is-danger"},r.a.createElement("pre",null,t.error)));var a=t.result.stylesheetContents,n=0;Object.keys(a).length&&(n=Object.keys(a).map(function(e){return a[e].length}).reduce(function(e,t){return e+t}));var s=t.result.finalCss.length;return r.a.createElement("div",{className:"box",style:{textAlign:"left"}},r.a.createElement("h3",{className:"title is-3"},"Results"),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:!this.state.showPrettier},"Raw CSS"),r.a.createElement("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:this.state.showPrettier},"Pretty CSS"))),r.a.createElement("div",{className:"level-right"},r.a.createElement("p",{className:"level-item"},r.a.createElement("button",{className:"button",onClick:function(a){e.state.showPrettier?N()(t.result._prettier):N()(t.result.finalCss),e.setState({copiedToClipboard:!0},function(){window.setTimeout(function(){e.dismounted||e.setState({copiedToClipboard:!1})},3e3)})}},this.state.copiedToClipboard?"Copied to clipboard":"Copy to clipboard")))),r.a.createElement(v.a,{component:"pre",className:"language-css"},this.state.showPrettier?t.result._prettier:t.result.finalCss),r.a.createElement("nav",{className:"level results-level"},r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Total size (before)"),r.a.createElement("p",{className:"title"},T(n)))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Size (minimal)"),r.a.createElement("p",{className:"title"},T(s)))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Size reduction"),r.a.createElement("p",{className:"title"},T(n-s))))),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"title is-4"},"Stylesheets"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,Object.keys(a).map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement("a",{href:e},e)),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement("b",null,T(a[e].length))))})))),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"title is-4"},"Graphically"),r.a.createElement(U,{newTotalSize:s,stylesheetContents:a})))}}]),t}(r.a.PureComponent),U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[],a=["#ff0029","#377eb8","#66a61e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067"].sort(function(){return Math.random()-.5}),n=1;Object.keys(this.props.stylesheetContents).forEach(function(r){var s;t.push({label:(s=r,new URL(s).pathname),backgroundColor:a[n++],stack:"Before",data:[e.props.stylesheetContents[r].length,0]})}),t.push({label:"minimal",backgroundColor:a[0],stack:"After",data:[0,this.props.newTotalSize]});var r={labels:["Before","After"],datasets:t},s=document.getElementById("sizegraph").getContext("2d");new E.a(s,{type:"bar",data:r,options:{title:{display:!0,text:"Smaller bar(s) means less downloading time"},tooltips:{display:!1,mode:"index",intersect:!1,callbacks:{label:function(e,t){if(0===e.yLabel)return null;var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=T(e.yLabel,0),a}}},legend:{display:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0,ticks:{callback:function(e){return T(e,0)}}}]}}})}},{key:"render",value:function(){return r.a.createElement("canvas",{id:"sizegraph"})}}]),t}(r.a.PureComponent),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={waiting:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.dismounted||e.setState(function(e){return{waiting:e.waiting+1}})},1e3)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0,this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.waiting<1?null:r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"Fetching..."),r.a.createElement("p",null,"Been waiting for ",this.state.waiting," seconds"))}}]),t}(r.a.PureComponent),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return"0 bytes";var a=1024,n=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,r)).toFixed(t))+" "+n[r]},A=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column is-6 is-offset-3"},r.a.createElement("h1",{className:"title has-text-centered"},"About ",r.a.createElement("code",null,"minimalcss")),r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"This is a online version that lets your try the",r.a.createElement("a",{href:"https://www.npmjs.com/package/minimalcss"},r.a.createElement("code",null,"minimalcss")," node package"),"."),r.a.createElement("p",null,"Normally you use ",r.a.createElement("code",null,"minimalcss")," in your server, continous integration or command line tooling to let it extract the minimal CSS a page/URL/site uses but this site let's you try it from the browser.",r.a.createElement("br",null),"Consider everything here experimental and this web app is not part of the core ",r.a.createElement("code",null,"minimalcss")," project."),r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/"},"Go back Home"))))))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={navbarMenu:!1},a.toggleNavbarMenu=function(e){e.preventDefault(),a.setState({navbarMenu:!a.state.navbarMenu})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("section",{className:"hero is-large header-image"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("h1",{className:"brand-title"},r.a.createElement(h.c,{className:"navbar-item",to:"/"},r.a.createElement("code",null,"minimalcss"))),r.a.createElement("span",{onClick:this.toggleNavbarMenu,className:this.state.navbarMenu?"navbar-burger burger is-active":"navbar-burger burger","data-target":"navbarMenu"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenu",className:this.state.navbarMenu?"navbar-menu is-active":"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(h.c,{to:"/",className:"navbar-item",activeClassName:"is-active",exact:!0},"Home"),r.a.createElement(h.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About minimalcss"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-white is-outlined is-small",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/peterbe/minimalcss-website"},r.a.createElement("span",null,"View Source"))))))))),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:O}),r.a.createElement(d.a,{path:"/about",component:A}),r.a.createElement(d.a,{component:R})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss-website"},"minimalcss-website")," ","uses"," ",r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss-server"},"minimalcss-server")," ","which uses"," ",r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss"},"minimalcss")," ","by ",r.a.createElement("a",{href:"https://www.peterbe.com"},"@peterbe")," and"," ",r.a.createElement("a",{href:"https://twitter.com/stereobooster"},"@stereobooster"),"."),r.a.createElement("p",null,"Site design by ",r.a.createElement("a",{href:"https://bulma.io/"},"Bulma")," and"," ",r.a.createElement("a",{href:"http://html.mijnspeelplek.com/bulma1/"},"Bulma Templates")))))))}}]),t}(r.a.Component);function R(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,t.pathname)))}a(45);var I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; going to refresh."),window.location.reload()):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):z(e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.d3e9a921.chunk.js.map