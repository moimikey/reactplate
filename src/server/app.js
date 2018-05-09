const serve = require('koa2-static-files');

module.exports = (app) => {
  return app.use(serve.static(`${__dirname}/../../public/`));
};
