const r = require.context('./modules', true, /\.story\.js$/)
const stories = r.keys()

stories.forEach(r)

module.exports = stories
