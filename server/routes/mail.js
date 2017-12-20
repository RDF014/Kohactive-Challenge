const express = require('express');
const sendEmail = require('../service/sparkPost');

const router = express.Router();

router.route('/mail')
  .post((req, res) => {
    console.log('sendingMail');
    sendEmail()
    .then(data => res.send(data) )
    .catch(err => res.status(err.statusCode).send(err) );
  });

module.exports = router;
