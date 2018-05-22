#!/usr/bin/env bash
set -eo pipefail

export REACT_APP_ABSOLUTE_API_URL=https://api.minimalcss.app/minimize
yarn run build

./bin/insert_csp.js build/index.html

./bin/update_version.js > build/version.json

gh-pages --add --dist build/
