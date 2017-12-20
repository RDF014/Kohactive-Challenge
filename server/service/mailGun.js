const mailgun = require("mailgun-js");
const api_key = process.env.SENDGRID_API_KEY;
const domain = 'raphaeldf.com';
const mailgun = require('mailgun-js')({apiKey: api_key, domain});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

function sendGridEmail () {
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
}

module.exports = sendMailgun;