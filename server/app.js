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
            let options = {
                type:categoryType,
                participants:[1]
            }             

            var dummyList=[];
            dummyList.push(options);
            dummyList.push(options);
            dummyList.push(options);
            dummyList.push(options); 
            for(var i=0;i<4;i++)
            {
                var obj={};
                await bored.random(options).then(res => {
                    response = JSON.parse(res)
                    obj.activityName=response.activity;
                    obj.participants=response.participants;
                    obj.cost=response.price;
                    obj.activityId=response.key;
                    list.push(obj);
                    //callback()
                });
            }
    return list
    }
},
graphiql:true
}));


app.listen(3100)