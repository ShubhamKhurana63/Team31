// import ApolloClient from 'apollo-boost';
// var jsdom = require('jsdom');
// $ = require('jquery')(new jsdom.JSDOM().window);
// const flash = require('express-flash-notification');
// var f = require('fancybox')($);
const { request } = require('graphql-request')
const { HttpLink } = require('apollo-boost')
const {fetch} = require('isomorphic-fetch')
const gql = require('graphql-tag')
const { ApolloClient } = require('apollo-client')
const { InMemoryCache } = require('apollo-cache-inmemory')
let datetime = new Date();
const ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const session =  require('express-session') ;
const app = express();
var flash = require('connect-flash');
app.use(express.static('public'));
// app.use(express.cookieParser('keyboard cat'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
app.use(bodyParser());
app.use(flash());
app.set('view engine','ejs');

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://vS12:npm123@cluster0-9p4gv.mongodb.net/Users?retryWrites=true',(err, database) =>{
if (err) return console.log(err)
	app.listen(3000,function (){
})
})
app.get('/', (req, res) => {
  		res.render('index.ejs')
})

app.get('/linkss', (req, res) => {
	var type = req.query.type;
	console.log(type)
  const query = `query xyz($type:String){
  getActivity(category:$type)
  {
    activityId
    activityName
    cost
  }
}`
  
request('http://localhost:3100/graphql', query).then(function(data)
{
	console.log(data.getActivity.length)
	console.log(data)
	res.render('activity.ejs',{result:data});	
})

})
