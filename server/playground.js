var SerpWow = require('google-search-results-serpwow')
var async = require('asyncawait/async');
var await = require('asyncawait/await');


 
// create the serpwow object, passing in our API key
let serpwow = new SerpWow('7B83B23001C94FAEA70D42442DD6A684')
console.log("=====DONE===1==")
// #1. example using promises & async/await
async function getResult() {
 
  let result = await serpwow.json({
    q: 'Learn calligraphy'
  });
  

  console.log("=====DONE=====")
  // pretty-print the result
  console.log(JSON.stringify(result.organic_results[0].link, 0, 2));
 
}


getResult();