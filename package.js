Package.describe({
  summary: "Autoform UFS",
  version: '0.0.2',
  name: "buishi:autoform-ufs",
  // git: 'https://github.com/DesignmanIO/meteor-autoform-quill',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.use(['templating@1.1.5'], ['client']);

  api.use([
      'aldeed:autoform@5.8.1',
      'jalik:ufs@0.6.1',
      'underscore@1.0.9'
  ],
      ['client', 'server']
  );

  api.addFiles([
    'lib/client/ufsAutoform.js',
    'lib/client/ufs.base.css',
    'lib/client/ufs_form.html',
    'lib/client/ufs_form.js'
  ], ['client']);

  Npm.depends({
    gm: '1.22.0'
  })

});
