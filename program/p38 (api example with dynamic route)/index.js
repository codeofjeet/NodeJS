const express = require('express')
const userData = require('./user.json')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send(userData)
})

app.get('/user/:id', (req, res) => {
  const id=req.params.id
  let filterData = userData.filter((user)=>user.id==id)
  res.send(filterData)
})

app.get('/username/:name', (req, res) => {
  const name=req.params.name
  let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
  res.send(filterData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})