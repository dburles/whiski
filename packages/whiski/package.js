Package.describe({
  summary: 'Whiski - Smart Content Management'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);

  api.add_files('lib/client/template.html', 'client');
  api.add_files('lib/client/whiski.js', 'client');
  api.add_files('lib/client/routes.js', 'client');

  api.export('WhiskiController', 'client');
  api.export('WhiskiInstalledModules', 'client');
});
