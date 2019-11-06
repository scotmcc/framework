require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const paths = {
  client: path.resolve(__dirname, 'client'),
  server: path.resolve(__dirname, 'server'),
  public: path.resolve(__dirname, 'public')
};

const client = webpack({
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.resolve(paths.client, 'index.js'),
  output: {
    path: paths.public,
    publicPath: paths.public,
    filename: 'client.js'
  }
}, (err, stats) => {
  if (err) return console.error(err.details);
  console.log(stats.toString({
    colors: true,
    warnings: false
  }));
});

const server = webpack({
  mode: process.env.NODE_ENV,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: path.resolve(paths.server, 'index.js'),
  output: {
    path: paths.public,
    publicPath: paths.public,
    filename: 'server.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}, (err, stats) => {
  if (err) return console.error(err.details);
  console.log(stats.toString({
    colors: true,
    warnings: false
  }));
});
