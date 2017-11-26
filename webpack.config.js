const CLIENT_DIR = __dirname + '/client';

module.exports = {
  entry: `${CLIENT_DIR}/src/index.jsx`,
  output: {
    path: `${CLIENT_DIR}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?/
      }
    ]
  },
  devServer: {
    contentBase: './client/dist',
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};

