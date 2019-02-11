(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(97)},44:function(e,t,a){},92:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),i=a(7),o=a(8),c=a(10),m=a(9),u=a(11),h=a(99),d=a(98),f=a(100),p=a(37),v=(a(44),a(33)),b=a.n(v),E=(a(48),a(34)),g=a.n(E),w=(a(92),a(93),a(35)),y=a.n(w),N=a(21),k=a.n(N),j="https://api.minimalcss.app/minimize";var O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:null,fetching:!1,fetchingUrl:null,errorMessage:null,serverError:!1,previousUrls:JSON.parse(window.sessionStorage.getItem("previousUrls")||"[]")},a.fetchResult=function(e){if(!e.trim())throw new Error("no url");return a.setState(function(t){return{fetching:!0,result:null,fetchingUrl:e,errorMessage:null,serverError:!1}}),fetch(j,{method:"POST",body:JSON.stringify({url:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){a.setState({fetching:!1}),t.ok?t.json().then(function(t){if(t.error)a.setState({errorMessage:t.error,serverError:!1});else{var n=y()(t.result.finalCss,{indent:"  ",autosemicolon:!0});t.result._prettier=n,a.setState({result:t,errorMessage:null,serverError:!1},function(){var n=t.result.stylesheetContents,r=0;Object.keys(n).length&&(r=Object.keys(n).map(function(e){return n[e].length}).reduce(function(e,t){return e+t}));var s=t.result.finalCss.length,l={url:e,savings:r-s,time:(new Date).getTime()},i=a.state.previousUrls.filter(function(t){return t.url!==e});i.unshift(l),a.setState({previousUrls:i},function(){window.sessionStorage.setItem("previousUrls",JSON.stringify(i))})})}}):a.setState({errorMessage:"Server request failure (status=".concat(t.status,")"),serverError:!1})}).catch(function(e){a.setState({errorMessage:"API call failed: ".concat(e),serverError:!0})})},a.submitForm=function(e){e.preventDefault();var t=a.refs.url.value.trim();if(t){var n=a.props.location.pathname;return n+="?url=".concat(encodeURIComponent(t)),a.props.history.push(n),a.fetchResult(t)}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(this.props.location.search){var e=function(e,t){for(var a=e.substring(1,e.length).split("&"),n=0;n<a.length;n++){var r=a[n].split("=");if(decodeURIComponent(r[0])===t)return decodeURIComponent(r[1])}}(this.props.location.search,"url");e&&(this.refs.url.value=e,this.fetchResult(e))}}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.state.result&&this.setState({result:null})}},{key:"render",value:function(){var e=this,t=this.state.previousUrls.filter(function(t){return!e.state.fetchingUrl||e.state.fetchingUrl!==t.url});return r.a.createElement("section",{className:"hero home"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{className:"input is-medium",type:"url",ref:"url",defaultValue:"https://minimalcss.app",placeholder:"For example. http://localhost:3000"})),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"submit",className:this.state.fetching?"button is-info is-medium is-loading":"button is-info is-medium",disabled:this.state.fetching},"Go!")))))),r.a.createElement("div",{className:"section main"},r.a.createElement("div",{className:"container"},this.state.fetching||this.state.errorMessage||this.state.result||this.state.previousUrls.length?null:r.a.createElement("p",null,r.a.createElement("i",null,"Waiting for you to submit a URL above to show some cool stuff.")),this.state.fetching?r.a.createElement(P,null):null,this.state.errorMessage?r.a.createElement(x,{message:this.state.errorMessage,serverError:this.state.serverError}):r.a.createElement(M,{result:this.state.result}))),r.a.createElement(C,{previousUrls:t}))}}]),t}(r.a.PureComponent),C=r.a.memo(function(e){var t=e.previousUrls;return t.length?r.a.createElement("div",{className:"section previous-urls"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box",style:{textAlign:"left"}},r.a.createElement("h4",{className:"title is-3"},"Previous URLs Submitted"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.url},r.a.createElement("td",{className:"overflowing",style:{width:"70%"}},r.a.createElement("a",{href:"/?url=".concat(encodeURIComponent(e.url))},e.url)),r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement(S,{mseconds:(new Date).getTime()-e.time,suffix:"ago"}))),r.a.createElement("td",null,"Saving ",T(e.savings)))})))))):null}),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mseconds:0},a._refresh=function(e){window.setTimeout(function(){a.dismounted||(a.setState({mseconds:a.state.mseconds+1e3*e}),window.setTimeout(function(){a._refresh(e)},1e3*e))},1e3*e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this._refresh(10)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this.props.suffix;return"".concat(function(e){var t=Math.floor(e/1e3),a=Math.floor(t/3600);if(a>0)return 1===a?"1 hour":"".concat(a," hours");var n=Math.floor(t/60);return n>0?1===n?"1 minute":"".concat(n," minutes"):"seconds"}(this.state.mseconds)," ").concat(e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{mseconds:e.mseconds}}}]),t}(r.a.PureComponent),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title"},this.props.serverError?"Server Request Error":"Minimization Error"),this.props.serverError?null:r.a.createElement("div",{className:"notification is-warning"},"The request to ",r.a.createElement("code",null,"minimalcss-server")," worked but the actual minimization work failed for some reason."),r.a.createElement("div",{className:"notification is-danger"},r.a.createElement("pre",null,this.props.message)))}}]),t}(r.a.PureComponent),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showPrettier:!1,copiedToClipboard:!1},a.toggleShowPrettier=function(e){a.setState(function(e){return{showPrettier:!e.showPrettier}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.dismounted=!0}},{key:"render",value:function(){var e=this,t=this.props.result;if(null===t)return null;if(t.error)return r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title"},"Error..."),r.a.createElement("div",{className:"notification is-danger"},r.a.createElement("pre",null,t.error)));var a=t.result.stylesheetContents,n=0;Object.keys(a).length&&(n=Object.keys(a).map(function(e){return a[e].length}).reduce(function(e,t){return e+t}));var s=t.result.finalCss.length;return r.a.createElement("div",{className:"box",style:{textAlign:"left"}},r.a.createElement("h3",{className:"title is-3"},"Results"),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:!this.state.showPrettier},"Raw CSS"),r.a.createElement("button",{type:"button",className:"button is-rounded",onClick:this.toggleShowPrettier,disabled:this.state.showPrettier},"Pretty CSS"))),r.a.createElement("div",{className:"level-right"},r.a.createElement("p",{className:"level-item"},r.a.createElement("button",{className:"button",onClick:function(a){e.state.showPrettier?k()(t.result._prettier):k()(t.result.finalCss),e.setState({copiedToClipboard:!0},function(){window.setTimeout(function(){e.dismounted||e.setState({copiedToClipboard:!1})},3e3)})}},this.state.copiedToClipboard?"Copied to clipboard":"Copy to clipboard")))),r.a.createElement(b.a,{component:"pre",className:"language-css"},this.state.showPrettier?t.result._prettier:t.result.finalCss),r.a.createElement("nav",{className:"level results-level"},r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Total size (before)"),r.a.createElement("p",{className:"title"},T(n)))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Size (minimal)"),r.a.createElement("p",{className:"title"},T(s)))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Size reduction"),r.a.createElement("p",{className:"title"},T(n-s))))),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"title is-4"},"Stylesheets"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,Object.keys(a).map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement("a",{href:e},e)),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement("b",null,T(a[e].length))))})))),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"title is-4"},"Graphically"),r.a.createElement(U,{newTotalSize:s,stylesheetContents:a})))}}]),t}(r.a.PureComponent),U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t=[],a=["#ff0029","#377eb8","#66a61e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067"].sort(function(){return Math.random()-.5}),n=1;for(var r in this.props.stylesheetContents)t.push({label:(e=r,new URL(e).pathname),backgroundColor:a[n++],stack:"Before",data:[this.props.stylesheetContents[r].length,0]});t.push({label:"minimal",backgroundColor:a[0],stack:"After",data:[0,this.props.newTotalSize]});var s={labels:["Before","After"],datasets:t},l=document.getElementById("sizegraph").getContext("2d");new g.a(l,{type:"bar",data:s,options:{title:{display:!0,text:"Smaller bar(s) means less downloading time"},tooltips:{display:!1,mode:"index",intersect:!1,callbacks:{label:function(e,t){if(0===e.yLabel)return null;var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=T(e.yLabel,0),a}}},legend:{display:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0,ticks:{callback:function(e){return T(e,0)}}}]}}})}},{key:"render",value:function(){return r.a.createElement("canvas",{id:"sizegraph"})}}]),t}(r.a.PureComponent),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={waiting:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.dismounted||e.setState(function(e){return{waiting:e.waiting+1}})},1e3)}},{key:"componentWillUnmount",value:function(){this.dismounted=!0,this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.waiting<1?null:r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"Fetching..."),r.a.createElement("p",null,"Been waiting for ",this.state.waiting," seconds"))}}]),t}(r.a.PureComponent),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return"0 bytes";var a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(t))+" "+["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]},A=a(22),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column is-6 is-offset-3"},r.a.createElement("h1",{className:"title has-text-centered"},"About ",r.a.createElement("code",null,"minimalcss")),r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"This is a online version that lets your try the",r.a.createElement("a",{href:"https://www.npmjs.com/package/minimalcss"},r.a.createElement("code",null,"minimalcss")," node package"),"."),r.a.createElement("p",null,"Normally you use ",r.a.createElement("code",null,"minimalcss")," in your server, continous integration or command line tooling to let it extract the minimal CSS a page/URL/site uses but this site let's you try it from the browser.",r.a.createElement("br",null),"Consider everything here experimental and this web app is not part of the core ",r.a.createElement("code",null,"minimalcss")," project."),r.a.createElement("h3",null,r.a.createElement(A.a,{to:"/"},"Go back Home"))))))}}]),t}(r.a.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={navbarMenu:!1},a.toggleNavbarMenu=function(e){e.preventDefault(),a.setState({navbarMenu:!a.state.navbarMenu})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("section",{className:"hero is-large header-image"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("h1",{className:"brand-title"},r.a.createElement(d.a,{className:"navbar-item",to:"/"},r.a.createElement("code",null,"minimalcss"))),r.a.createElement("span",{onClick:this.toggleNavbarMenu,className:this.state.navbarMenu?"navbar-burger burger is-active":"navbar-burger burger","data-target":"navbarMenu"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenu",className:this.state.navbarMenu?"navbar-menu is-active":"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(d.a,{to:"/",className:"navbar-item",activeClassName:"is-active",exact:!0},"Home"),r.a.createElement(d.a,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About minimalcss"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-white is-outlined is-small",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/peterbe/minimalcss-website"},r.a.createElement("span",null,"View Source"))))))))),r.a.createElement(f.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:O}),r.a.createElement(p.a,{path:"/about",component:B}),r.a.createElement(p.a,{component:I})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss-website"},"minimalcss-website")," ","uses"," ",r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss-server"},"minimalcss-server")," ","which uses"," ",r.a.createElement("a",{href:"https://github.com/peterbe/minimalcss"},"minimalcss")," ","by ",r.a.createElement("a",{href:"https://www.peterbe.com"},"@peterbe")," and"," ",r.a.createElement("a",{href:"https://twitter.com/stereobooster"},"@stereobooster"),"."),r.a.createElement("p",null,"Site design by ",r.a.createElement("a",{href:"https://bulma.io/"},"Bulma")," and"," ",r.a.createElement("a",{href:"http://html.mijnspeelplek.com/bulma1/"},"Bulma Templates")))))))}}]),t}(r.a.Component);function I(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,t.pathname)))}a(96);var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; going to refresh."),window.location.reload()):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");z?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.7478dd43.chunk.js.map