const path = require('path');
const webpack = require('webpack'); // eslint-disable-line node/no-unpublished-require

const isDev = process.env.NODE_ENV && process.env.NODE_ENV === 'development';

module.exports = {
  entry: './client.js',
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /packages\/opencollective-eymail-components\/src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      IS_CLIENT: true,
    }),
  ],
  optimization: {
    minimize: !isDev,
  },
};
