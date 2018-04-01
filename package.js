Package.describe({
  "summary": "Share Meteor Login State Between Sub Domains",
  "version": "1.4.0",
  "git": "https://github.com/kadirahq/meteor-login-state.git",
  "name": "kadira:login-state"
});

Package.on_use(function(api) {
  api.versionsFrom('1.6.1');

  api.use('tracker');
  api.use('random');

  api.mainModule('client.js', 'client');
});