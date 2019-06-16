var express = require('express');
var bodyParser = require('body-parser');

const graphqlHttp=require('express-graphql');
const {buildSchema}=require('graphql');
var request = require('request');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const PORT=process.env.PORT || 3000;
const bored = require('bored');



var app=express();

let datetime = new Date();
const ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');
//const express = require('express');
//const bodyParser = require('body-parser')
const session =  require('express-session') ;
//const app = express();
app.use(bodyParser());
app.use(express.static('public'));



app.set('view engine','ejs');
const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb+srv://vS12:npm123@cluster0-9p4gv.mongodb.net/Users?retryWrites=true',(err, database) =>{
// if (err) return console.log(err)
// 	app.listen(PORT,function (){
// })
// })

app.get('/', (req, res) => {
  // AirlineDb.collection('Users').find().toArray(function(err, results){
  // 	if(err) return console.log(err)
  		res.render('index.html')
  // })
})



app.use('/graphql',graphqlHttp({

schema:buildSchema(`

type rootQuery
{
    getActivity(category: String):[Activity!]   
}
type Activity
{
    activityId:String
    cost:String
    participants:String
    activityName: String
    relevantLinks:String 
}
schema{    
    query:rootQuery
}
`),
rootValue:{
    async getActivity(args)
    {
        let response
        var categoryType=args.category;
        var list=[];


           
            let options = {
                type:categoryType,
                participants:[1]
            }             

           

           //ForEachSeries(dummyList,function(item,callback)
            //{   
            for(var i=0;i<4;i++)
            {
                var obj={};
                await bored.random(options).then(res => {
                    response = JSON.parse(res)
                    console.log(response)
                    obj.activityName=response.activity;
                    obj.participants=response.participants;
                    obj.cost=response.price;
                    obj.activityId=response.key;


                    obj.relevantLinks=response.link
                   // console.log("========",obj);
                   
                    list.push(obj);
                });
            }
      
    return list
    }
},
graphiql:true
}));

app.listen(PORT)