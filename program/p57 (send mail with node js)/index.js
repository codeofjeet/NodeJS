const express = require('express')
const nodemailer = require('nodemailer')
const app = express()



const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'codeofjeet@gmail.com',
        pass:'ekvc ayga hbsu brug'
    }
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get("/mail", (req, res) => {
    res.render('mail')
})

app.post("/submit-email", (req, res) => {
    console.log(req.body)
    const mailOption={
        from:'codeofjeet@gmail.com',
        to:'codeofjeet@gmail.com',
        subject:req.body.subject,
        text:req.body.mail
    }

    transporter.sendMail(mailOption, (err, info)=>{
        if(err){
            req.send("Mail Operations Failed, Try Again")
        }else{
            res.send("Mail Successfully Send")
        }
    })

    res.send("E-mail Send")
})


app.listen(3200, () => {
    console.log("Server running on port 3200")
})

//ekvc ayga hbsu brug