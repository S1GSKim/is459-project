import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
var app = express();
const port = 8081;

import * as dotenv from 'dotenv';
dotenv.config()
let accesskeyid = process.env.accesskeyid;
let secretaccesskey = process.env.secretaccesskey;

import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import

//anything in the 'public' folder can be used in here
app.use(express.static('public')); 

app.get('/', function (req, res) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  res.sendFile( __dirname + "/" + "test_c.html" );
})
//###########################################################
// Create service client module using ES6 syntax.
import { S3Client } from "@aws-sdk/client-s3";
// Set the AWS Region.
const REGION = "us-east-1";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
export { s3Client };

// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import * as path from 'path';
import * as fs from 'fs';
app.get('/UploadS3', function (req, res) {
  // Path to and name of object. For example '../myFiles/index.js'.
  const file = req.query.filename;
  const fileStream = fs.createReadStream(file);

  // Set the parameters
  const uploadParams = {
    Bucket: "is459-grp8",
    // Add the required 'Key' parameter using the 'path' module.
    Key: "Import_Dataset_Job/"+path.basename(file),
    // Add the required 'Body' parameter
    Body: fileStream,
  };

  // Upload file to specified bucket.
  const run = async () => {
    try {
      const data = await s3Client.send(new PutObjectCommand(uploadParams));
      console.log("Success", data);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();

});

app.get('/rec4u', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/Rec4u1",
      userId:user_ID,
      accessKeyId:accesskeyid,
      secretAccessKey:secretaccesskey
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
    res.setHeader('Content-type','text/html')
    res.write('<head><link rel = "stylesheet" href "https://bootswatch.com/4/cyborg/bootstrap.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><h2 style="color:blue; text-align:center;">Recommendations</h2><div class="row">')
    result.forEach(item => res.write('<div class="col-2"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"+'><div class="card-body"><h5 class="card-title">'+item.itemId+'</h5></div></div></div>'));
    // imageURLs.forEach(image => res.write('<div class="col-1"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+image+'></div></div>'));
    // <div class="card-body"><h5 class="card-title">'+item.itemID+'</h5></div>
    res.write('</div>')
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
      accessKeyId:accesskeyid,
      secretAccessKey:secretaccesskey
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
    res.setHeader('Content-type','text/html')
    res.write('<head><link rel = "stylesheet" href "https://bootswatch.com/4/cyborg/bootstrap.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><h2 style="color:blue; text-align:center;">Most Viewed Items</h2><div class="row">')
    result.forEach(item => res.write('<div class="col-2"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"+'><div class="card-body"><h5 class="card-title">'+item.itemId+'</h5></div></div></div>'));
    // imageURLs.forEach(image => res.write('<div class="col-1"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+image+'></div></div>'));
    // <div class="card-body"><h5 class="card-title">'+item.itemID+'</h5></div>
    res.write('</div>')
  }).catch(console.error.bind(console))
});

app.get('/AlsoView1', function (req, res) {
  // Prepare output in JSON format
  const user_ID = req.query.userID;
  const item_ID = req.query.itemID;
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/AlsoView1",
      userId:user_ID,
      itemId:item_ID,
      accessKeyId:accesskeyid,
      secretAccessKey:secretaccesskey
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
    res.setHeader('Content-type','text/html')
    res.write('<head><link rel = "stylesheet" href "https://bootswatch.com/4/cyborg/bootstrap.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><h2 style="color:blue; text-align:center;">Also Viewed Items</h2><div class="row">')
    result.forEach(item => res.write('<div class="col-2"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"+'><div class="card-body"><h5 class="card-title">'+item.itemId+'</h5></div></div></div>'));
    // imageURLs.forEach(image => res.write('<div class="col-1"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+image+'></div></div>'));
    // <div class="card-body"><h5 class="card-title">'+item.itemID+'</h5></div>
    res.write('</div>')
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
      accessKeyId:accesskeyid,
      secretAccessKey:secretaccesskey
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
    res.setHeader('Content-type','text/html')
    res.write('<head><link rel = "stylesheet" href "https://bootswatch.com/4/cyborg/bootstrap.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><h2 style="color:blue; text-align:center;">Best Sellers</h2><div class="row">')
    result.forEach(item => res.write('<div class="col-2"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"+'><div class="card-body"><h5 class="card-title">'+item.itemId+'</h5></div></div></div>'));
    // imageURLs.forEach(image => res.write('<div class="col-1"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+image+'></div></div>'));
    // <div class="card-body"><h5 class="card-title">'+item.itemID+'</h5></div>
    res.write('</div>')
  }).catch(console.error.bind(console))
});

// NEED TO CODE FUNCTION TO ACCESS S3 AND GET PAST ITEMS BOUGHT
// INPUT PAST BOUGHT ITEMS INTO PARAM TO GET ITEMS BOUGHT TOGETHER
app.get('/BoughtTgt1', function (req, res) {
  // Prepare output in JSON format
  const item_ID = req.query.itemID;
  // console.log(user_ID);
  const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "us-east-1"});
  // Set the recommendation request parameters.
  const getRecommendationsParam = {
      numResults: 20,
      recommenderArn: "arn:aws:personalize:us-east-1:664070006982:recommender/BoughtTgt1",
      itemId:item_ID,
      accessKeyId:accesskeyid,
      secretAccessKey:secretaccesskey
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
    res.setHeader('Content-type','text/html')
    res.write('<head><link rel = "stylesheet" href "https://bootswatch.com/4/cyborg/bootstrap.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><h2 style="color:blue; text-align:center;">Frequently bought together Items</h2><div class="row">')
    result.forEach(item => res.write('<div class="col-2"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+dir+item.itemId.substring(0,2)+"/0"+item.itemId+".jpg"+'><div class="card-body"><h5 class="card-title">'+item.itemId+'</h5></div></div></div>'));
    // imageURLs.forEach(image => res.write('<div class="col-1"><div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 16px;text-align: center;"><img class="card-img-top" src='+image+'></div></div>'));
    // <div class="card-body"><h5 class="card-title">'+item.itemID+'</h5></div>
    res.write('</div>')
    // console.log(imageURLs);
    // res.json(imageURLs);

  }).catch(console.error.bind(console))
});


app.listen(port, () => console.log('Server started on port http://127.0.0.1:'+port))
