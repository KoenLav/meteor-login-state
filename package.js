Package.describe({
  summary: 'Share Meteor Login State Between Sub Domains',
  version: '1.4.0',
  git: 'https://github.com/koenlav/meteor-login-state.git',
  name: 'koenlav:login-state',
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');

  api.use([
    'ecmascript',
    'meteor',
    'tracker',
    'tmeasday:check-npm-versions@0.3.2',
  ]);

  api.mainModule('client.js', 'client');
});