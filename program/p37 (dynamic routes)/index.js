const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const users=["jeet", "deepak", "gaurav", "bhupendra", "deepti"];
  let data=`<ul>`;
  for(let i=0;i<users.length;i++){
    data+=`<li><a href="/user/${users[i]}">${users[i]}</a></li>`
  }
  data+='</ul>'
  res.send(data)
})

app.get('/user/:name', (req, res) => {
  const urlName=req.params.name
  res.send(`<h1>This is ${urlName}'s Profile Page</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})