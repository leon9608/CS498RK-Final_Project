
module.exports = function (app, router) {
  app.use('/api', require('./home.js')(router));
  app.use('/api/user',require('./user.js'));
  app.use('/api/posts', require('./posts.js'));
};
