Package.describe({
  name: 'maxfi:semantic-ui-components',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Semantic-UI components for Blaze',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maxfi/meteor-semantic-ui-components',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use(['ecmascript', 'jquery', 'templating@1.3.2'], 'client');
  api.addFiles([
    'semantic-ui-dropdown.html',
    'semantic-ui-dropdown.js',
    'semantic-ui-menu.html',
    'semantic-ui-menu.js',
    'semantic-ui-modal.html',
    'semantic-ui-modal.js',
    'semantic-ui-popup.html',
    'semantic-ui-popup.js',
  ], 'client');
});