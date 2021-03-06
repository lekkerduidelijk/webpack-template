const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = require('./config');

module.exports = {
  output: {
    pathinfo: true,
    publicPath: config.proxyUrl + config.publicPath
  },
  devtool: '#cheap-module-source-map',
  stats: false,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      open: config.open,
      server: { baseDir: config.paths.dist },
      watch: config.watch,
      delay: 500
    })
  ]
};
