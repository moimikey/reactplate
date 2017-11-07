import log from './util/logger'

function Polyfill () {
  log('polyfill', 'start')

  if (!global.Promise) {
    import('core-js/es6/promise')
      .then(() => log('Loaded Promise polyfill'))
  }

  if (!global.fetch) {
    import('isomorphic-fetch')
      .then(() => log('Loaded fetch polyfill'))
  }

  if (!global.requestAnimationFrame) {
    import('raf/polyfill')
      .then(() => log('Loaded requestAnimationFrame polyfill'))
  }

  log('polyfill', 'done')
}

export default Polyfill
