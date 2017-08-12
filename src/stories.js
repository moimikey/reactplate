const requireC = require.context('./modules', true, /\.story\.js$/)
requireC.keys().forEach((filename) => requireC(filename))
