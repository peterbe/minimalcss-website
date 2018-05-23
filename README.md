# Website for `minimalcss`

## How to hack on it

First install all the things:

```sh
git clone https://github.com/peterbe/minimalcss-website.git
cd minimalcss-website
yarn
```

In a separate teminal you need a working version of
[`minimalcss-server`](https://github.com/peterbe/minimalcss-server). When you
run `yarn run server` in that, it will start a server at
`http://localhost:5000`.

The dev server for `minimalcss-website` proxies all requests to
`http://localhost:3000/minimize` to `http://localhost:5000/minimize`.

## License

Copyright (c) 2017-2018 [Peter Bengtsson](https://www.peterbe.com).
See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
