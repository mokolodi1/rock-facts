Package.describe({
  name: 'mokolodi1:rock-facts',
  version: '0.0.2',
  // Wouldn't want to arouse suspicions...
  summary: 'Improvements to sAlert',
  git: 'https://github.com/mokolodi1/rock-facts/',
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
