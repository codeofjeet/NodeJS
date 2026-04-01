const express = require('express');
const mongoose = require('mongoose');
const studentModel = require('./model/studentModel');

const app = express();

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/user");
  console.log("MongoDB connected");
}
connectDB();

app.get("/", async (req, res) => {
  const data = await studentModel.find();
  res.json(data);
});

app.listen(3200, () => {
  console.log("Server running on 3200");
});