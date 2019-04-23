
module.exports = function (app, router) {
  app.use('/api', require('./home.js')(router));
  app.use('/api/createUser',require('./createUser.js'));
  app.use('/api/signIn',require('./signIn.js'));
  app.use('/api/posts', require('./posts.js'));
  app.use('/api/postJob', require('./postJob.js'));
  app.use('/api/deletePost', require('./deletePost.js'));
  app.use('/api/getPostsByUser', require('./getPostsByUser.js'));
};
