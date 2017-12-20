const express = require('express');
const sendSparkPost = require('../service/sparkPost');
const sendSendgrid = require('../service/sendgrid');

const router = express.Router();

router.route('/mail')
  .post((req, res) => {
    const { recipients, subject, message, } = req.body;
    const separateRecipents = recipients.split(' ');
    sendSparkPost(separateRecipents, subject, message)
    .then(data => res.status(201).send(data) )
    .catch(err => sendSendgrid(separateRecipents, subject, message) )
    .then(data => res.status(201).send(data) )
    .catch(err => res.status(400).send(err) );
  });

module.exports = router;