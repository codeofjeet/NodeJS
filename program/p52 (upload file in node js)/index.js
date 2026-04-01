const express = require('express')
const multer = require('multer')

const app = express()
const storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, 'upload')
  },
  filename:function(req, file, cb){
    cb(null, file.originalname)
  },
})
const upload = multer({storage})

const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <form action='/upload' method='post' enctype="multipart/form-data">
    <input type='file' name='myfile' /> <br/><br/><br/>
    <button>Upload File</button>
    </form>
    `)
})

app.post("/upload", upload.single('myfile'), (req, res)=>{
  res.send({
    message:"File Uploaded",
    info: req.file
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})