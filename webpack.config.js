const webpack = require('webpack')
const path = require('path')
const env = process.env.NODE_ENV

const config = {
  context: path.join(__dirname, 'client'),
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

if (env == 'development') {
  module.exports = Object.assign({}, config, {
    devServer: {
      contentBase: './client'
    },
    output: {
      filename: 'application.js'
    },
    watch: true,
    devtool: 'eval-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  })
}

if (env == 'production') {
  module.exports = Object.assign({}, config, {
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  })
}