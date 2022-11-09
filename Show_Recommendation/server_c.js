import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
var app = express();
const port = 8081;


import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import

//anything in the 'public' folder can be used in here
app.use(express.static('public')); 

app.get('/', function (req, res) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  res.sendFile( __dirname + "/" + "test_c.html" );
})

app.get('/rec4u', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/Rec4u1",
      userId:user_ID,
      accessKeyId:"AKIAZVHNIFDDAEVU3OO2",
      secretAccessKey:"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"
    };
  var run = async () => {
    try {
      let response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
      // console.log("Success!", response.itemList);
      return response.itemList; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run().then((result)=> {
    const imageURLs = []
    const dir = "https://is459-grp8.s3.amazonaws.com/images/0"
    result.forEach(item => imageURLs.push(dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"));
    // console.log(imageURLs);
    res.json(imageURLs);
  }).catch(console.error.bind(console))
});

app.get('/MostViewed1', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/MostViewed1",
      userId:user_ID,
      accessKeyId:"AKIAZVHNIFDDAEVU3OO2",
      secretAccessKey:"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"
    };
  var run = async () => {
    try {
      let response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
      // console.log("Success!", response.itemList);
      return response.itemList; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run().then((result)=> {
    const imageURLs = []
    const dir = "https://is459-grp8.s3.amazonaws.com/images/0"
    result.forEach(item => imageURLs.push(dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"));
    // console.log(imageURLs);
    res.json(imageURLs);
  }).catch(console.error.bind(console))
});

app.get('/AlsoView1', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/AlsoView1",
      userId:user_ID,
      accessKeyId:"AKIAZVHNIFDDAEVU3OO2",
      secretAccessKey:"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"
    };
  var run = async () => {
    try {
      let response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
      // console.log("Success!", response.itemList);
      return response.itemList; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run().then((result)=> {
    const imageURLs = []
    const dir = "https://is459-grp8.s3.amazonaws.com/images/0"
    result.forEach(item => imageURLs.push(dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"));
    // console.log(imageURLs);
    res.json(imageURLs);
  }).catch(console.error.bind(console))
});

app.get('/BestSeller1', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/BestSeller1",
      userId:user_ID,
      accessKeyId:"AKIAZVHNIFDDAEVU3OO2",
      secretAccessKey:"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"
    };
  var run = async () => {
    try {
      let response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
      // console.log("Success!", response.itemList);
      return response.itemList; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run().then((result)=> {
    const imageURLs = []
    const dir = "https://is459-grp8.s3.amazonaws.com/images/0"
    result.forEach(item => imageURLs.push(dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"));
    // console.log(imageURLs);
    res.json(imageURLs);
  }).catch(console.error.bind(console))
});

// NEED TO CODE FUNCTION TO ACCESS S3 AND GET PAST ITEMS BOUGHT
// INPUT PAST BOUGHT ITEMS INTO PARAM TO GET ITEMS BOUGHT TOGETHER
app.get('/BoughtTgt1', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  console.log(user_ID);
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/BoughtTgt1",
      userId:user_ID,
      accessKeyId:"AKIAZVHNIFDDAEVU3OO2",
      secretAccessKey:"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"
    };
  var run = async () => {
    try {
      let response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
      // console.log("Success!", response.itemList);
      return response.itemList; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run().then((result)=> {
    const imageURLs = []
    const dir = "https://is459-grp8.s3.amazonaws.com/images/0"
    result.forEach(item => imageURLs.push(dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"));
    // console.log(imageURLs);
    res.json(imageURLs);
  }).catch(console.error.bind(console))
});


app.listen(port, () => console.log('Server started on port http://127.0.0.1:'+port))
