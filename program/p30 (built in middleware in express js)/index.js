import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const publicPath = path.resolve('pages')
app.use(express.static(publicPath))

app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
  const absPath=path.resolve('pages/home.html')
  res.sendFile(absPath);
})

app.get('/about',(req, res) => {
  const absPath=path.resolve('pages/about.html')
  res.sendFile(absPath);
})

app.get('/contact', (req, res) => {
  const absPath=path.resolve('pages/contact.html')
  res.sendFile(absPath);
})

app.get('/service', (req, res) => {
  const absPath=path.resolve('pages/service.html')
  res.sendFile(absPath);
})

app.get('/login', (req, res) => {
  const absPath=path.resolve('pages/login.html')
  res.sendFile(absPath);
})

app.get('/login1', (req, res) => {
  res.send(`
          <form action='/submit' method='post'>
            <label for="username">Username</label><br/><br/>
            <input type="text" id="username" name="username" placeholder="Enter username"><br/><br/>
            <label for="password">Password</label><br/><br/>
            <input type="password" id="password" name="password" placeholder="Enter password">
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    `);
})

app.post('/submit', (req, res) => {
  console.log("User Login Details are:- ", req.body)
  // res.send("Submit Page");
  const absPath=path.resolve('pages/submit.html')
  res.sendFile(absPath);
})

app.use((req, res) => {
  const absPath=path.resolve('pages/404.html')
  res.status(404).sendFile(absPath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})