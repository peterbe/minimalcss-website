#!/usr/bin/env node
const fs = require("fs");
const spawn = require("child_process").spawnSync;

const CSP = `
default-src 'none';
img-src 'self';
script-src 'self';
style-src 'self';
font-src 'self';
manifest-src 'self'
`.trim();

const htmlFile = process.argv[2];
if (!htmlFile) throw new Error("missing file argument");
const html = fs.readFileSync(htmlFile, "utf8");
const metatag = `
  <meta http-equiv="Content-Security-Policy" content="${CSP}">
`
  .replace(/\n/g, "")
  .trim();
if (html.search(metatag) > -1) throw new Error("already has metatag in HTML");
const anchor = '<meta charset="utf-8">';
const newHtml = html.replace(anchor, `${anchor}${metatag}`);
fs.writeFileSync(htmlFile, newHtml, "utf8");
