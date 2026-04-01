import express from 'express'
import { handleUser } from './controller/usercontroller.js'

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', handleUser) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})