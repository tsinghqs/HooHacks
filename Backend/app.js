var express = require('express');
const bodyParser = require('body-parser')
const twitter = require('twitter'); 
const cors = require('cors');
const spawn = require("child_process").spawn;
const config = require('./config.json') 
const client = new twitter(config); 
const http = require('http')
const port = 5004;

var app = express();
app.use(cors());

//   const params = {
//      q: 'apple', count: 1
//    } 

app.get('/tweets', (req, res) => {
   let params = {screen_name: req.query.search};
   console.log("" + req.query.search);
	client.get('statuses/user_timeline', params, (error, data, response) => {
		if (error) {
         console.log(error);
         res.send(error);
         return;
      }
      console.log(data);
      res.send(data);
      const pythonProcess = spawn('python', data);

      

	// 	let id = data.statuses;
	// 	let tweets = [];
	// 	for(let i = 0; i < data.statuses.length; i++){
   //    // Get the tweet Id from the returned data
   //    let tweetObject = {
   //    	user: id[i].user.name,
   //    	text: id[i].text
   //    }
      
      let tweets = [];
      for (let i = 0; i < data.length; i++) {
         let tweetObj = {
            user: data[i].user.name,
            screenName: data[i].user.screen_name,
            text: data[i].text
         };
         tweets.push(tweetObj);
      }
      console.log(tweets);
      res.send(tweets);
   });
});

 // client.get('search/tweets', params, function(error, tweets, response) {
//     if(error) {
//        console.log("Error getting tweets");
//        return;
//     }
//     console.log(tweets);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(tweets)); // This line sends the tweets to the client making the http request.
//     });
// }


app.listen(8080);