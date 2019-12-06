const app = require('../server')
const up = require('../multer/multer-config')

app.post('/upload',(req,res,next)=>{
  res.send(req.files[0])
})
