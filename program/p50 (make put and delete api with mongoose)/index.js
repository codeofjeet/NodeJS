const express = require('express');
const mongoose = require('mongoose');
const studentModel = require('./model/studentModel');

const app = express();
app.use(express.json())

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/user");
  console.log("MongoDB connected");
}
connectDB();

app.get("/", async (req, res) => {
  const data = await studentModel.find();
  res.json(data);
});

app.post("/save", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body missing",
      success: false
    });
  }

  const { name, age, mark } = req.body;

  if (!name || !age || !mark) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
      stuinfo: null
    });
  }

  const studentData = await studentModel.create({ name, age, mark });

  res.json({
    message: "Data Stored",
    success: true,
    stuinfo: studentData
  });
});

app.put("/update/:id",async(req, res)=>{
    const id = req.params.id;
    const stuData = await studentModel.findByIdAndUpdate(id,{
      ...req.body
    })
    res.send({
      message:"Data Updated",
      success:true,
      info:stuData
    })
})

app.delete("/delete/:id",async(req, res)=>{
    const id = req.params.id;
    const stuData = await studentModel.findByIdAndDelete(id)
    res.send({
      message:"Data Deleted",
      success:true,
      info:stuData
    })
})

app.listen(3200, () => {
  console.log("Server running on 3200");
});