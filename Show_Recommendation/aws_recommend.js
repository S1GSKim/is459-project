// class AWS {
// constructor () {
//   this.region='us-east-1',
//   this.accessKeyId = 'AKIAZVHNIFDDPPE56XPJ';
//   this.secretAccessKey = 'n41l26nxGT3dtLmPmlc4fjAQeSP'
// }

//   var personalizeruntime = new AWS.PersonalizeRuntime({
//     region:this.region,
//     accessKeyId:this.accessKeyId,
//     secretAccessKey:secretAccessKey
//   });

//   get_params = {
//     userId:user,
//     numResults:20,
//     recommenderArn:'arn:aws:personalize:us-east-1:664070006982:recommender/Rec4u1'
//   }
//   personalizeruntime.getRecommendations(get_params, function(err, data) {
//     if (err) {
//       console.log(err, err.stack); //unsuccessful response
//     } else {
//       console.log(data); // successful response
//       return data;
//     }
//   });

// }



// Get service clients module and commands using ES6 syntax.
import { GetRecommendationsCommand } from
  "@aws-sdk/client-personalize-runtime";

import { personalizeRuntimeClient } from "./libs/personalizeClients.js";
// Or, create the client here.
// const personalizeRuntimeClient = new PersonalizeRuntimeClient({ region: "REGION"});

// Set the recommendation request parameters.
export const getRecommendationsParam = {
  campaignArn: 'CAMPAIGN_ARN', /* required */
  userId: 'USER_ID',      /* required */
  numResults: 15    /* optional */
}

export const run = async () => {
  try {
    const response = await personalizeRuntimeClient.send(new GetRecommendationsCommand(getRecommendationsParam));
    console.log("Success!", response);
    return response; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();


