import express from 'express'
import path from 'path'
// import home from './pages/home.js'
// import login from './pages/login.js'
// import submit from './pages/submit.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const absPath=path.resolve('pages/home.html')
  res.sendFile(absPath);
})

app.get('/login', (req, res) => {
  const absPath=path.resolve('pages/login.html')
  res.sendFile(absPath);
})

app.get('/submit', (req, res) => {
  const absPath=path.resolve('pages/submit.html')
  res.sendFile(absPath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})