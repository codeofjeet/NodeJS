const mongoose = require('mongoose')

async function dbConnection () {
  await mongoose.connect("mongodb://localhost:27017/user")

  const schema = new mongoose.Schema(
    {
      name: String,
      age: Number,
      mark: Number
    },
    { collection: "student" } // 👈 IMPORTANT
  )

  const studentModel = mongoose.model("student", schema)

  const result = await studentModel.find()
  console.log(result)
}

dbConnection()