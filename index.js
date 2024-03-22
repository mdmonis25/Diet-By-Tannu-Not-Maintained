var express = require('express');
var http = require('http');
var path = require('path')
var nodemailer = require('nodemailer');
const { error } = require('console');

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port",port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "")));
app.use(express.static(path.join(__dirname,"./index.html")))

//Routing

app.get("/", function(req,response){
    response.sendFile(path.join(__dirname, "./index.html"))
})

app.post("/send_email",function(req, response){
    let from = req.body.from;
    let to = "mdmonis.work@gmail.com";
    let subject = req.body.subject;
    let message = req.body.message;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'mdmonis.work@gmail.com',
            pass: 'nqzkiqoujxcdxoeq'
        }
    })

    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        }
        else{
            console.log("Email Send: "+ info.response)
        }
        response.redirect("/")
    })


})
//Initializing Server
server.listen(port, function(){
    console.log("Starting Server on port " + port)
})