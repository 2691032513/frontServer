var autoScanner = require('require-all')

var app = require('./src/server')

autoScanner({
  dirname: __dirname + '\\src\\requests'
})
