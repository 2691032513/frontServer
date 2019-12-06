const multer = require('multer')

var storage = multer.diskStorage({
  filename:function(req,file,cb){
    cb(null,Date.now() +'_'+ file.originalname)
  },
  destination(req,file,cb){
    cb(null,'./upload')
  }
})

const upcfg=multer({
  storage: storage,
  limits:{
    files: 1,
    fileSize: 1024*(1024*1024) // unit: byte
  }
})


module.exports = upcfg