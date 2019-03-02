var express = require('express');
const bodyParser = require('body-parser')
const twitter = require('twitter'); 
const cors = require('cors');

const config = require('./config') 
const client = new twitter(config); 
const http = require('http')
const port = 5004;

var app = express();
app.use(cors());

  const params = {
     q: 'apple', count: 1
   } 

app.get('/tweets', (req, res) => {
	client.get('search/tweets', params, (error, data, response) => {
		if (error) {
			res.send(error);
		}
		let id = data.statuses;
		let tweets = [];
		for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let tweetObject = {
      	user: id[i].user.name,
      	text: id[i].text
      }
      
      // Try to Favorite the selected Tweet
     tweets.push(tweetObject);
        }
        
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


app.listen(3000);