const AWS = require("aws-sdk");

const credentials = {
  id: "",
  secret: "",
};

AWS.config.update({
  region: "us-east-1",
  accessKeyId: credentials.id,
  secretAccessKey: credentials.secret
});

let params = {
  Message: "Teste mensagem enviada",
  PhoneNumber: '+551997838372',
};

function sendSMS(params) {
  var publishTextPromise = new AWS.SNS().publish(params).promise();

  publishTextPromise
    .then(function (data) {
      console.log("MessageID is " + data.MessageId);
    })
    .catch(function (err) {
      console.log(err, err.stack);
    });
}

sendSMS(params);
