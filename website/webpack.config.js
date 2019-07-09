let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/ui/')
    .setPublicPath('/ui')
    .addEntry('app', './assets/js/app.js')
    .addStyleEntry('styles', './assets/css/styles.scss')
    .enableReactPreset()
    .disableSingleRuntimeChunk()
    .enableSassLoader(function(options) {}, {
        resolveUrlLoader: false
    })
;

module.exports = Encore.getWebpackConfig();
