Package.describe({
  name: 'maxfi:semantic-ui-components',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Semantic-UI components for Blaze',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maxfi/meteor-semantic-ui-components',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use(['ecmascript', 'coffeescript', 'jquery', 'underscore', 'templating'], 'client');
  api.addFiles([
    'SemanticUIDropdown.html',
    'SemanticUIDropdown.coffee',
    'SemanticUIMenu.html',
    'SemanticUIMenu.coffee',
    'SemanticUIModal.html',
    'SemanticUIModal.coffee',
    'SemanticUIPopup.html',
    'SemanticUIPopup.coffee',
  ], 'client');
});