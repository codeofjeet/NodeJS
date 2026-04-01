import express from 'express'
import path from 'path'
import morgan from 'morgan'
// import home from './pages/home.js'
// import login from './pages/login.js'
// import submit from './pages/submit.js'
const app = express()
app.use(morgan('dev'))
const port = 3000

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

// app.get('/wait', (req, res)=>{
//   setTimeout(()=>{
//     res.send("Result After 1 Second")
//   },1000);
// })

app.use((req, res) => {
  const absPath=path.resolve('pages/404.html')
  res.status(404).sendFile(absPath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})