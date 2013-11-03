Package.describe({
  summary: 'Whiski - Smart Content Management'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);

  api.add_files('lib/client/template.html', 'client');
  api.add_files('lib/client/whiski.coffee', 'client');
  api.add_files('lib/client/routes.coffee', 'client');

  api.export('WhiskiInstalledModules', 'client');
});
