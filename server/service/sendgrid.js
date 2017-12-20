const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendSendgrid (recipients, subject, message) {
  const msg = {
    to: recipients,
    from: 'no_reply@raphaeldf.com',
    subject: subject,
    text: message,
  };
  return sgMail.send(msg, true)
    .then(data => data )
    .catch(err => {throw err});
}

module.exports = sendSendgrid;