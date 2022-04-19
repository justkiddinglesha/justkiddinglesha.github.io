const { ProvidePlugin } = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  output: {
    filename: 'index.js',
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new ESLintPlugin(),
  ],
};
