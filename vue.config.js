module.exports = {
  baseUrl: '/',

  outputDir: 'dist',

  lintOnSave: true,

  compiler: false,

  chainWebpack: () => {},
  configureWebpack: () => {},

  vueLoader: {},

  productionSourceMap: true,

  css: {
    extract: true,

    sourceMap: true,

    loaderOptions: {},

    modules: false,
  },

  dll: false,

  pwa: {},

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
  },

  pluginOptions: {
    // ...
  },
};
