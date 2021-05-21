// vue.config.js
module.exports = {
  publicPath: './',
  // process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/',
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'commons/definitions/translations',
      enableInSFC: false,
    },
  },
  configureWebpack: (config) => {
    config.resolve.alias['@COMMONS'] = __dirname + '/src/commons';
    config.resolve.alias['@MODELS'] = __dirname + '/models';
    config.resolve.alias['@SOLUTION'] = __dirname + '/src/solution';
    config.resolve.alias['@NODEMODULES'] = __dirname + '/node_modules';

    config.resolve.alias['@HQ'] = __dirname + '/src/modules/headquarters';

    config.resolve.alias['@DEFAULT'] = __dirname + '/src/modules/default';
  },
};
