var express = require('express');
var bodyParser = require('body-parser');
const passport = require('passport');

const PORT=3100;


var app=express();

app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
// Add the line below, which you're missing:
require('./passport/config/file')(passport);

//  app.post('/login/auth',(req,res)=>
//  {
//  res.status(200).send('hello auth');
//  })

//  app.post('/login/signup',(req,res)=>
//  {
//      res.status(200).send('hello signup')
//  })

app.get('/login/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
                console.log('===================');
                console.log(JSON.stringify(req));
                console.log('===================');
    }
);






app.listen(3100)