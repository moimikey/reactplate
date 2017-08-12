# reactplate (a "universal" react web application boilerplate)

# included

1. minify ecmascript with [babili](https://www.npmjs.com/package/babili)
1. minify css with [cssnano](https://www.npmjs.com/package/cssnano)
1. future-proof css with [cssnext](https://www.npmjs.com/package/postcss-cssnext)
1. isolate component css with [csx](https://www.npmjs.com/package/csx)
1. test react with [enzyme](https://www.npmjs.com/package/enzyme)
1. serve static content with [express](https://www.npmjs.com/package/express)
1. type check with [flow](https://www.npmjs.com/package/flow-bin)
1. optimize static server with [helmet](https://www.npmjs.com/package/helmet)
1. access arrays better with [idx](https://www.npmjs.com/package/idx)
1. code-split with [import()](https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import)
1. test with [jest](https://www.npmjs.com/package/jest)
1. logging with [logdown](https://www.npmjs.com/package/logdown)
1. css transforms with [postcss](https://www.npmjs.com/package/postcss-cssnext)
1. develop with [react-storybook](https://www.npmjs.com/package/@storybook/react)
1. build interfaces with [react](https://www.npmjs.com/package/react)
1. use cutting edge ecmascript with [stage-0](https://www.npmjs.com/package/babel-preset-stage-0)
1. lint with [standard](https://www.npmjs.com/package/standard)
1. bundle and load modules with [webpack 3](https://www.npmjs.com/package/webpack)
1. seamlessly configure webpack with [webpack-chain](https://www.npmjs.com/package/webpack-chain)

# webpack

## optimizations
- Dead and unused code elimination (UglifyJS)
- ES2015 minimization/minification (Babili)
- Increased browser and network security (Helmet, HPP)
- Inline critical path CSS + Gzip
- Multi-optional caching (DllPlugin, CommonsChunkPlugin)
- On-demand polyfilling (dynamic `import`)

# how-to

## install deps
```
yarn --ignore-engines
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
