Package.describe({
  name: 'mokolodi1:rock-facts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use(['session', "templating"], 'client');
  api.use('juliancwirko:s-alert@3.1.1', 'client');

  api.addFiles('rock-facts.html', 'client');
  api.addFiles('rock-facts.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mokolodi1:rock-facts');
  api.addFiles('rock-facts-tests.js');
});
