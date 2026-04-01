import express from 'express'
import path from 'path'


const app = express()
const port = 3000
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   const absPath=path.resolve('pages/home.html')
//   res.sendFile(absPath);
// })

// app.get('/about', (req, res) => {
//   const absPath=path.resolve('pages/about.html')
//   res.sendFile(absPath);
// })

// app.get('/contact', (req, res) => {
//   const absPath=path.resolve('pages/contact.html')
//   res.sendFile(absPath);
// })

// app.get('/service', (req, res) => {
//   const absPath=path.resolve('pages/service.html')
//   res.sendFile(absPath);
// })

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

app.get('/', (req, res) => {
 res.render('newhome', {course:'Node JS', duration:'3 Months', fees:'6000'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})