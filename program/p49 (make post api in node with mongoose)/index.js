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

app.listen(3200, () => {
  console.log("Server running on 3200");
});