var express = require('express');
var bodyParser = require('body-parser');
const passport = require('passport');
const graphqlHttp=require('express-graphql');
const {buildSchema}=require('graphql');
var request = require('request');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const PORT=3100;
const bored = require('bored');



var app=express();

app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
// Add the line below, which you're missing:
//require('./passport/config/file')(passport);

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
    relevantLinks:[String!]! 
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

       // async.forEachLimit()
       // for(var i=0;i<4;i++)
        //{
           
            let options = {
                type:categoryType,
                participants:[1]
            }             

            var dummyList=[];
            dummyList.push(options);
            dummyList.push(options);
            dummyList.push(options);
            dummyList.push(options);

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
                    console.log("========",obj)
                    list.push(obj);
                    //callback()
                });
            }
                
            // },function()
            // {
            //     console.log("KHURANA");
            //     console.log(list);
            //     return list;
            // });
        //}
    setTimeout(function(){ console.log("Hello"); }, 10000);
    console.log("KHURANA7")
    return list
    }
},
graphiql:true
}));


app.listen(3100)