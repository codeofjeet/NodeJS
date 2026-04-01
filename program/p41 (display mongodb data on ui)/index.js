const express = require('express')
const { MongoClient } = require('mongodb')

const dbName = "user"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.set("view engine", 'ejs')

app.get('/', async (req, res) => {
  try {
    await client.connect()
    const db = client.db('user')
    const collection = db.collection('student')
    const result = await collection.find().toArray()
    res.render('students', {result})
    // res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//https://www.npmjs.com/package/mongodb
//mongodb://localhost:27017
//mongosh 
//npm install ejs