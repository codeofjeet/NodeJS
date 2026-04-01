const express = require('express');
const cors =require('cors');
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  res.send({
    course:"Node Js",
    duration:"3 Months",
    fees: 7000
})
});


app.listen(3200, () => {
  console.log("Server running on 3200");
});