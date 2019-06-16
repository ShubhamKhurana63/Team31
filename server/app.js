var express = require('express');
var bodyParser = require('body-parser');

const graphqlHttp=require('express-graphql');
const {buildSchema}=require('graphql');
var request = require('request');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const PORT=process.env.PORT || 3100;
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
        //     var qry=list[0].activityName
        //     list.forEach(element=>
        //      {
        //          var query=element.activityName;
        //          var links=[];
        //          await getResult(query).then(function(result){
        //              //console.log("=====DONE=====");
        //              links.push(result);
        //              //console.log(result)
        //          })
        //      element.relevantLinks=links;
        //      })
        //    // console.log(result)
    return list
    }
},
graphiql:true
}));

app.listen(PORT)