"use strict";(self.webpackChunkminimalcss_website=self.webpackChunkminimalcss_website||[]).push([[140],{140:function(e,a,t){t.r(a);var n=t(791),s=t(594),l=t.n(s),r=t(184),d=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return"0 bytes";var t=1024,n=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(a))+" "+n[s]};a.default=function(e){var a=e.stylesheetContents,t=e.newTotalSize;return n.useEffect((function(){var e=[],n=["#ff0029","#377eb8","#66a61e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067"].sort((function(){return Math.random()-.5})),s=1;Object.keys(a).forEach((function(t){var l;e.push({label:(l=t,new URL(l).pathname),backgroundColor:n[s++],stack:"Before",data:[a[t].length,0]})})),e.push({label:"minimal",backgroundColor:n[0],stack:"After",data:[0,t]});var r={labels:["Before","After"],datasets:e},f=document.getElementById("sizegraph").getContext("2d");new(l())(f,{type:"bar",data:r,options:{title:{display:!0,text:"Smaller bar(s) means less downloading time"},tooltips:{display:!1,mode:"index",intersect:!1,callbacks:{label:function(e,a){if(0===e.yLabel)return null;var t=a.datasets[e.datasetIndex].label||"";return t&&(t+=": "),t+=d(e.yLabel,0),t}}},legend:{display:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0,ticks:{callback:function(e){return d(e,0)}}}]}}})}),[t,a]),(0,r.jsx)("canvas",{id:"sizegraph"})}}}]);
//# sourceMappingURL=140.a8da64e7.chunk.js.map