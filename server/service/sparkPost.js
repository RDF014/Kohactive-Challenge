const SparkPost = require('sparkpost');
const client = new SparkPost();

function sendSparkPost (recipients, subject, message) {
  return client.transmissions.send({
    content: {
      from: 'no_reply@mail.raphaeldf.com',
      subject: subject,
      html:`<html><body><p>${message}</p></body></html>`
    },
    recipients: recipients.map(email => ({address: email}) )
  })
  .then(data => data)
  .catch(err => {throw err});
};

module.exports = sendSparkPost; 