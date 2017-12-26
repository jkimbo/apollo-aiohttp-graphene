/* eslint-disable */
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      },
      {
        loader: "sass-loader",
        options: {
            includePaths: [__dirname]
        }
      }]
    },
    { test: /\.css$/,
      loader: "style-loader!css-loader",
      include: __dirname
    },
    {
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.(ttf|eot|svg|png)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]'
        }
      }
    }
  ]
  },
  devServer: {
    compress: true,
    disableHostCheck: true   // That solved it
 },
 plugins: [
   new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
  })
 ],
}

// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
// var src = path.join(__dirname, '..', '..', 'src')
// var fs = require('fs')
// if (fs.existsSync(src)) {
//   // Use the latest src
//   module.exports.resolve = { alias: { 'react-router-redux': src } }
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: ['babel-loader'],
//     include: src
//   });
// }
