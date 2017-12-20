// const mailgun = require('mailgun-js')
const api_key = process.env.MAILGUN_API_KEY;
const domain = 'raphaeldf.com';
const mailgun = require('mailgun-js')({apiKey: api_key, domain});

const data = {
  // from: 'Excited User <no_reply@raphaeldf.com>',
  from: 'test@example.com',
  to: 'flipninja017@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

function sendMailgun (cb) {
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
    if (error) {
      return cb(null, error);
    }
    return cb(body, null);
  });
}

module.exports = sendMailgun;