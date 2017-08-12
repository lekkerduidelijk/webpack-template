const url = require('url');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = require('./config');

const target = process.env.DEVURL || config.devUrl;

/**
 * We do this to enable injection over SSL.
 */
// if (url.parse(target).protocol === 'https:') {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
// }

module.exports = {
  output: {
    pathinfo: true,
    publicPath: config.proxyUrl + config.publicPath,
  },
  devtool: '#cheap-module-source-map',
  stats: false,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new BrowserSyncPlugin({
    //   open: config.open,
    //   proxyUrl: config.proxyUrl,
    //   watch: config.watch,
    //   delay: 500,
    //   server: { baseDir: config.paths.dist}
    // }),
    // new BrowserSyncPlugin({
    //   target,
    //   open: config.open,
    //   proxyUrl: config.proxyUrl,
    //   watch: config.watch,
    //   delay: 500,
    // }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: config.paths.dist },
      watch: config.watch,
      delay: 500
    }),
  ],
};
