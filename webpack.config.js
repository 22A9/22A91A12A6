const path = require('path');

module.exports = {
  entry: './index.jsx', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  },
  mode: 'development', 
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3003,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
};
