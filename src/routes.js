import UniversalRouter from 'universal-router'

export const routes = [{
  path: '',
  async action () {
    const page = await import('./pages/404')
    return page
  }
}, {
  path: '/',
  async action () {
    const page = await import('./pages/dashboard')
    console.log('hit route....', page)
    return page
  }
}]

export default new UniversalRouter(routes)
