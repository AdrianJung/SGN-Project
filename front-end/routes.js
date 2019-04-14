const routes = require('next-routes');

// Setup router.
module.exports = routes()
  .add('index', '/')
  .add('posts')
  .add('branch', '/branches/:slug')
  .add('story', '/stories/:slug')
  .add('project', '/projects/:slug')
  .add('events');