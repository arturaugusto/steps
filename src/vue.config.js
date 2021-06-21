const webpack = require('webpack')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  productionSourceMap: false,
  "publicPath": prod ? "./" : undefined,
};