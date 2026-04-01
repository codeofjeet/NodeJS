import express from 'express'
import path from 'path'


const app = express()
const port = 3000
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('/service', (req, res) => {
  res.render('service');
})

// app.use((req, res, next) => {
//   const error = new Error('Page Not Found')
//   error.status = 404
//   next(error)
// })

// app.use((error, req, res, next) => {
//   res.status(error.status || 500)
//      .sendFile(
//        path.resolve(
//          error.status === 404 ? 'pages/404.html' : 'pages/500.html'
//        )
//      )
// })

app.post('/submitUser', (req, res)=>{
  res.render('submitUser', req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})