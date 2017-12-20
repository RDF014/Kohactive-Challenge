const SparkPost = require('sparkpost');
const client = new SparkPost();

function sendSparkPost (recipient, subject, message) {
  return client.transmissions.send({
    content: {
      from: 'no_reply@raphaeldf.com',
      subject: subject,
      html:`<html><body><p>${message}</p></body></html>`
    },
    recipients: [ { address: recipient } ]
  })
  .then(data => data)
  .catch(err => {throw err});
};

module.exports = sendSparkPost; 