const accRouter = require('./accRouter');
const siteRouter = require('./siteRouter');
const announceRouter = require('./announceRouter');
const isLogin = require('../middleware/isLogin')
function route(app) {
 
  app.use('/acc',accRouter);
  app.use('/announce',isLogin,announceRouter);
  app.use('/',isLogin,siteRouter);
  
}
module.exports = route;