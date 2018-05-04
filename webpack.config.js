const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './public');

const extractStyles = loaders => {
  return process.env.NODE_ENV === 'production'
    ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loaders
      })
    : ['style-loader'].concat(loaders);
};

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
			loader: 'babel-loader',
			test: /\.(js|jsx)$/,
			exclude: /node_modules/
		}, {
		test: /\.s?css$/,
		use: [
			'style-loader',
			'css-loader',
			'sass-loader'
		]
		}]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
		contentBase: path.join(__dirname, 'public')
	}
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    // Short-circuit all warning code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // Minify with dead-code elimination.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      parallel: true
    }),
    // Enable scope hoisting.
    new webpack.optimize.ModuleConcatenationPlugin()
  ]);
}
