var express = require('express');
const app = express();
var up = require('./multer/multer-config')
 

app.use(up.any())
server = app.listen(8081, function () {
  // let host = server.address().address
  let port = server.address().port
  console.log('server ready on localhost:%s',port)

})
app.server = server
app.use(express.static('./web'))


module.exports = app