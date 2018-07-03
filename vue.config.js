const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    devServer: {
      allowedHosts: [
        '172.16.0.0/8'
      ],
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      },
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}

