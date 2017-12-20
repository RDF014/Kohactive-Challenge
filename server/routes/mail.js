const express = require('express');
const sendSparkPost = require('../service/sparkPost');
const sendMailgun = require('../service/mailgun');
const sendSendgrid = require('../service/sendgrid');

const router = express.Router();

router.route('/mail')
  .post((req, res) => {
    console.log('sendingMail');
    const { recipient, subject, message, } = req.body;
    sendSparkPost(recipient, subject, message)
    .then(data => res.send(data) )
    .catch(err => sendSendgrid(recipient, subject, message) )
    .then(data => res.send(data) )
    .catch(err => res.status(400).send(err) );
  });

module.exports = router;