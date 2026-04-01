const express = require('express')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: "codeofjeet",
    resave: false,
    saveUninitialized: true
}))

app.get("/login", (req, res) => {
    res.render('login')
})

app.post("/profile", (req, res) => {
    req.session.data = req.body
    // console.log(req.session.data)
    res.redirect("/profile")

    // res.render('profile', { data: req.session.data })
})

app.get("/", (req, res) => {
    const data = req.session.data || { name: "Guest" }
    // console.log(data)
    res.render('home', { data })
})

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/")
    })
})

app.get("/profile", (req, res) => {
    if (req.session.data) {
        res.render("profile", { data: req.session.data })
    } else {
        res.redirect("/login")
    }
})

app.listen(3200, () => {
    console.log("Server running on port 3200")
})