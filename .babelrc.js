const plugins = (env) => ({
  cli: [],
  default: [
    'syntax-dynamic-import',
    'syntax-jsx',
    'transform-decorators',
    'transform-flow-strip-types',
    'transform-react-display-name',
    'transform-react-jsx'
  ],
  production: [
    'syntax-dynamic-import',
    'syntax-jsx',
    'transform-decorators',
    'transform-flow-strip-types',
    'transform-react-display-name',
    'transform-react-jsx'
  ],
  test: [
    'syntax-jsx',
    'transform-decorators',
    'transform-es2015-modules-commonjs',
    'transform-flow-strip-types',
    'transform-react-jsx'
  ]
}[env || 'default'])

const presets = (env) => ({
  cli: [
    ['env', {
      targets: {
        node: 'current'
      }
    }]
  ],
  default: [
    ['env', {
      cacheDirectory: true,
      debug: true,
      modules: false,
      useBuiltIns: true,
      targets: {
        node: 'current',
        browsers: [
          '> 1%',
          'last 2 versions',
          'safari >= 7'
        ]
      }
    }],
    'stage-0'
  ],
  production: [
    ['env', {
      debug: false,
      modules: false,
      useBuiltIns: true,
      targets: {
        node: 'current',
        browsers: [
          '> 1%',
          'last 2 versions',
          'safari >= 7'
        ]
      }
    }],
    'stage-0',
    'babili'
  ],
  test: [
    ['env', {
      targets: {
        node: 'current'
      }
    }],
    'stage-0'
  ]
}[env || 'default'])

module.exports = {
  comments: false,
	presets: presets(process.env.NODE_ENV),
  plugins: plugins(process.env.NODE_ENV)
}
