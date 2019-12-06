const app = require('../server')

app.get('/test', function(req,res){
  res.send(req.query)
})