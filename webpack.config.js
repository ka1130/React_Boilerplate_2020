const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css|scss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          {
            loader: 'css-loader',
            options: {
              modules: {
                  hashPrefix: 'hash',
                  localIdentName: '[path]__[local]--[hash:base64:5]',
                  context: path.resolve(__dirname, 'src'),
              },														
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src')]
              },
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
    modules: [path.join(__dirname, "src/"), "node_modules/"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
