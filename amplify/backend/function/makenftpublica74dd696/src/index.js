/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 var AWS = require('aws-sdk');
 var s3 = new AWS.S3();

exports.handler = async (event) => {
  //console.log(`EVENT: ${JSON.stringify(event)}`);
  
  //event = JSON.stringify(event);
  
  console.log(event);
  
  var tokenId = event['queryStringParameters']['tokenId'];

  console.log(tokenId)
  
  
  var params = {
    ACL:'public-read',
    Bucket: "euphoriansmetadata",
    Key: tokenId,
  };
  
  console.log('start')
  
 await s3.putObjectAcl(params, function (err, data) {
    if (err) 
    
      console.log(err, err.stack);
    // an error occurred
    else 
    
      console.log(data); // successful response
    /*
         data = {
         }
         */
  }).promise();

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('data'),
  };
};
