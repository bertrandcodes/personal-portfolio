var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  return {
    mode: 'production',
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/'
    },
    plugins: [new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()],
    optimization: {
      minimizer: [new UglifyJsPlugin(), new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    }
  }
};
