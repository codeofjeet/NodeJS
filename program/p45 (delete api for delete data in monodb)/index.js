const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const dbName = "user"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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
  res.render('add-student')
})

app.post('/add-student', async(req, res)=>{
  // console.log(req.body)
  const collection = db.collection('student')
  const result = await collection.insertOne(req.body)
  console.log(result)
  res.send("Student Record Saved")
})

app.post("/add-student-api", async(req,res)=>{
  // console.log(req.body)
  const {name, age, mark} = req.body
  if(!name || !age || !mark){
    res.send({message:"Operation failed", success:"False"})
    return false
  }
  const collection = db.collection('student')
  const result = await collection.insertOne(req.body)
  res.send({message:"Operation Successful",success:true,result:result})
})

app.delete("/delete/:id", async(req, res)=>{
  // console.log(req.params.id)
  const collection = db.collection('student')
  const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
  if(result){
    res.send({
      message:"Student Data Deleted",
      success:true
    })
  }else{
     res.send({
      message:"Student Data Not Deleted, Try Again",
      success:false
    })
  }
})

app.get("/ui/delete/:id", async(req, res)=>{
  const collection = db.collection('student')
  const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
  if(result){
    res.send("<h1>Student Data Deleted</h1>")
  }else{
     res.send("<h1>Student Data Not Deleted, Try Again</h1>")
  }
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