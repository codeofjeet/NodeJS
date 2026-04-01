const express = require('express')
const { MongoClient } = require('mongodb')

const dbName = "user"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine", 'ejs')

client.connect().then((connection)=>{
  const db = connection.db(dbName);

  app.get("/api", async (req, res)=>{
    const collection = db.collection('student')
    const result = await collection.find().toArray()
    res.send(result)
  })

  app.get('/', async (req, res) => {
  try {
    const db = client.db('user')
    const collection = db.collection('student')
    const result = await collection.find().toArray()
    res.render('students', {result})
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/add',(req, res)=>{
  // res.send(`<form method="post" action="add-student">
  //   <input type="text" name="name" placeholder="Enter Student Name" />
  //   <br/><br/>
  //   <input type="text" name="age" placeholder="Enter Student Age" />
  //   <br/><br/>
  //   <input type="text" name="mark" placeholder="Enter Student Mark" />
  //   <br/><br/>
  //   <button>Add Student</button>
  //   </form>`)
  res.render('add-student')
})

app.post('/add-student', async(req, res)=>{
  // console.log(req.body)
  const collection = db.collection('student')
  const result = await collection.insertOne(req.body)
  console.log(result)
  res.send("Student Record Saved")
})

})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//https://www.npmjs.com/package/mongodb
//mongodb://localhost:27017
//mongosh 
//npm install ejs