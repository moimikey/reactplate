# reactplate (a "universal" react web application boilerplate)

# included

1. minify ecmascript with [babili](https://npmjs.com/package/babili)
1. minify css with [cssnano](https://npmjs.com/package/cssnano)
1. future-proof css with [cssnext](https://npmjs.com/package/postcss-cssnext)
1. isolate component css with [csx](https://npmjs.com/package/csx)
1. test react with [enzyme](https://npmjs.com/package/enzyme)
1. serve static content with [express](https://npmjs.com/package/express)
1. type check with [flow](https://npmjs.com/package/flow-bin)
1. optimize static server with [helmet](https://npmjs.com/package/helmet)
1. and [hpp](https://npmjs.com/package/hpp)
1. access arrays better with [idx](https://npmjs.com/package/idx)
1. code-split with [import()](https://npmjs.com/package/babel-plugin-syntax-dynamic-import)
1. test with [jest](https://npmjs.com/package/jest)
1. universal logging with [logdown](https://npmjs.com/package/logdown)
1. css transforms with [postcss](https://npmjs.com/package/postcss-cssnext)
1. build interfaces with [react](https://npmjs.com/package/react)
1. use cutting edge ecmascript with [stage-0](https://npmjs.com/package/babel-preset-stage-0)
1. lint with [standard](https://npmjs.com/package/standard)
1. interactively develop with [storybook](https://npmjs.com/package/@storybook/react)
1. bundle and load modules with [webpack](https://npmjs.com/package/webpack)
1. seamlessly configure webpack with [webpack-chain](https://npmjs.com/package/webpack-chain)

# webpack optimizations
- Dead and unused code elimination (UglifyJS)
- ES2015 minimization/minification (Babili)
- Multi-optional caching (DllPlugin, CommonsChunkPlugin)
- On-demand polyfilling (dynamic `import`)

# extras
- Travis CI + Yarn + Greenkeeper
- Inline critical path CSS + Gzip
- Healthcheck routes (`/__gtg`, `/__health`)

# how-to

## install deps
```
yarn install
```

## create a dll bundle
```
yarn build:dll
```

## build a production bundle
```
yarn build
yarn build:watch
```

## start a production server
```
yarn start:server
```

## develop in storybook
```
yarn start
```

## flow, lint and test
```
yarn flow

yarn lint
yarn lint:fix

yarn test
yarn test:all
yarn test:watch
```
