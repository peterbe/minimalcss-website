#!/usr/bin/env bash
set -eo pipefail

export REACT_APP_ABSOLUTE_API_URL=https://api.minimalcss.app/minimize
export INLINE_RUNTIME_CHUNK=false
yarn run build

echo "Inserting CSP meta tag..."
./bin/insert_csp.js build/index.html

echo "Making version.json..."
./bin/update_version.js > build/version.json

echo "Running gh-pages..."
gh-pages --add --dist build/
