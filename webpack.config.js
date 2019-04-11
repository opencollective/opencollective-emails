const path = require('path');
const webpack = require('webpack'); // eslint-disable-line node/no-unpublished-require

module.exports = {
  entry: './client.js',
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      IS_CLIENT: true,
    }),
  ],
  optimization: {
    minimize: true,
  },
};
