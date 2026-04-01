import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const publicPath = path.resolve('pages')
app.use(express.static(publicPath))

function checkRouteMiddleware(req, resp, next){
  console.log("User is accessing " + req.url + " page")
  next();
}

// app.use(checkRouteMiddleware)

function ageCheckRouteMiddleware(req, resp, next){
  if(!req.query.age || req.query.age < 18){
    resp.send("Alert! You can not access this page")
  }else{
     next();
  }
}

// app.use(ageCheck)

function ipCheckRouteMiddleware(req, resp, next){
  const ip = req.socket.remoteAddress
  // type ipconfig Using Command Prompt and Look for IPv4 Address
  //  192.168.43.69
  if(ip.includes('192.168.43.69')){
     resp.send("Alert! You can not access this page")
  }else{
    next()
  }
 
}

// app.use(ipCheck)

// app.use((req, resp, next)=>{
//   console.log("User is accessing " + req.url + " page")
//   next();
// })

app.get('/', ageCheckRouteMiddleware, (req, res) => {
  const absPath=path.resolve('pages/home.html')
  res.sendFile(absPath);
})

app.get('/about', checkRouteMiddleware, ipCheckRouteMiddleware,  (req, res) => {
  const absPath=path.resolve('pages/about.html')
  res.sendFile(absPath);
})

app.get('/contact', (req, res) => {
  const absPath=path.resolve('pages/contact.html')
  res.sendFile(absPath);
})

app.get('/service', (req, res) => {
  const absPath=path.resolve('pages/service.html')
  res.sendFile(absPath);
})

app.use((req, res) => {
  const absPath=path.resolve('pages/404.html')
  res.status(404).sendFile(absPath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})