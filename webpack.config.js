const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: './src/index.js',
    output: {
      path: Path.resolve(__dirname, 'build'),
      filename: 'index.[hash:8].js'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader',
        }),
      }],
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
      }),
      new CopyWebpackPlugin([{
        context: 'public',
        from: '**/*',
        ignore: ['.gitkeep'],
      }]),
      new ExtractTextPlugin({
        filename: 'theme.[hash:8].css',
        disable: env.IRON_DEBUG === 'true',
      }),
      new webpack.DefinePlugin({
        IRON_DEBUG: env.IRON_DEBUG,
      }),
    ],
  };
};