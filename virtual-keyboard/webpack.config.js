const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const EslintWebPackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'RSS Virtual Keyboard',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new EslintWebPackPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }],
      },
    ],
  },
};
