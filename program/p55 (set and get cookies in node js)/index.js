const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/login",(req, res)=>{
    res.render('login')
})

app.post("/profile",(req, res)=>{
    res.cookie("login", true)
    res.cookie("name", req.body.name)

    res.render('profile')
})

app.get("/",(req, res)=>{
    let name = req.cookies.name || "Guest"
    res.render('home',{name:name})
})

app.listen(3200)