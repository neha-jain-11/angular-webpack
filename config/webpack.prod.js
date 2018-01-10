var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var webpack = require("webpack");

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },

      sourceMap: false
    }),

    new ExtractTextPlugin('[name].hash.css'),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize : false
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});