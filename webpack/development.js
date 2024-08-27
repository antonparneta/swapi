/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const autoprefixer = require('autoprefixer');

const env = require('./settings/env');
const paths = require('./settings/paths');
const devServer = require('./settings/devServer')(paths, env);

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.dist,
    filename: 'assets/scripts/[name]-[contenthash].bundle.min.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: paths.nodeModules,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: paths.nodeModules,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name]-[contenthash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: paths.nodeModules,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name]-[contenthash][ext]',
        },
      },
      {
        test: /\.jsx?/,
        exclude: paths.nodeModules,
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  devServer,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: paths.html,
    }),
    new ESLintPlugin(),
  ],
};