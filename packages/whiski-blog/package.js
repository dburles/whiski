Package.describe({
  summary: 'Whiski Blog'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);
  api.use('whiski', ['client', 'server']);

  api.add_files('lib/client/whiski.coffee', 'client');
  api.add_files('lib/client/blog.html', 'client');
  api.add_files('lib/client/routes.coffee', 'client');
  api.add_files('lib/client/blog.coffee', 'client');
  api.add_files('lib/collections.coffee', ['client', 'server']);
});
