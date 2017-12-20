const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY_V2);


function sendSendgrid (recipient, subject, message) {
  const msg = {
    to: recipient,
    from: 'no_reply@raphaeldf.com',
    subject: subject,
    text: message,
  };
  return sgMail.send(msg)
    .then(data => data )
    .catch(err => {throw err});
}

module.exports = sendSendgrid;