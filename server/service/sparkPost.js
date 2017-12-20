const SparkPost = require('sparkpost');
const client = new SparkPost();
// FIGURE OUT HOW TO SET UP DOMAIN
function sendSparkPost () {
  return client.transmissions.send({
    content: {
      from: 'rdf014@raphaeldf.com',
      subject: 'Hello, World!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'rdf014@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
    return data;
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
    throw err;
  });
};

module.exports = sendSparkPost; 