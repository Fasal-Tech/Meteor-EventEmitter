Package.describe({
  name: "shivangkar:eventemitter",
  version: '1.0.0',
  summary: "A server and client event package.",
  git: "https://github.com/shivang007/Meteor-EventEmitter.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.0');

  api.addFiles('eventemitter.client.js', 'client');

  api.addFiles('eventemitter.server.js', 'server');

  api.export('EventEmitter');
});


Package.onTest(function (api) {
  api.use(['shivangkar:eventemitter']);
  api.use('test-helpers', ['server', 'client']);
  api.use('tinytest');

  api.addFiles('eventemitter.tests.js');
});
