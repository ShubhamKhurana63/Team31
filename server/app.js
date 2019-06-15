var express = require('express');
var bodyParser = require('body-parser');


const PORT=3100;


var app=express();

app.use(bodyParser.json())

 app.post('/login/auth',(req,res)=>
 {
 res.status(200).send('hello auth');
 })

 app.post('/login/signup',(req,res)=>
 {
     res.status(200).send('hello signup')
 })



app.listen(3100)