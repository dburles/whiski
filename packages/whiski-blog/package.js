Package.describe({
  summary: 'Whiski Blog'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);
  api.use('whiski', ['client', 'server']);

  api.add_files('lib/client/whiski.js', 'client');
  api.add_files('lib/client/blog.html', 'client');
  api.add_files('lib/client/routes.js', 'client');
  api.add_files('lib/client/blog.js', 'client');
  api.add_files('lib/collections.js', ['client', 'server']);

  api.export('BlogController', 'client');
});
