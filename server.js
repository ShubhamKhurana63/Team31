let datetime = new Date();
const ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser')
const session =  require('express-session') ;
const app = express();
app.use(bodyParser());
app.use(express.static('public'));
app.set('view engine','ejs');
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://vS12:npm123@cluster0-9p4gv.mongodb.net/Users?retryWrites=true',(err, database) =>{
if (err) return console.log(err)
	app.listen(3000,function (){
})
})

app.get('/', (req, res) => {
  // AirlineDb.collection('Users').find().toArray(function(err, results){
  // 	if(err) return console.log(err)
  		res.render('index.html')
  // })
})