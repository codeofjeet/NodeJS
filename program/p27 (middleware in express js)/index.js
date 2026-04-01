import express from 'express'
import path from 'path'

const app = express()
const port = 3000
// const abcPath = path.resolve('pages')
const publicPath = path.resolve('pages')
app.use(express.static(publicPath))

function checkRoute(req, resp, next){
  console.log("User is accessing " + req.url + " page")
  next();

}

app.use(checkRoute)

// app.use((req, resp, next)=>{
//   console.log("User is accessing " + req.url + " page")
//   next();
// })

app.get('/', (req, res) => {
  const absPath=path.resolve('pages/home.html')
  res.sendFile(absPath);
})

app.get('/about', (req, res) => {
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