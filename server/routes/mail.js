const express = require('express');
const sendSparkPost = require('../service/sparkPost');
const sendMailgun = require('../service/mailgun');

const router = express.Router();

router.route('/mail')
  // .post((req, res) => {
  //   console.log('sendingMail');
  //   sendSparkPost()
  //   .then(data => res.send(data) )
  //   .catch(err => res.status(err.statusCode).send(err) );
  // });
  .post((req, res) => {
    sendMailgun((data, err) => {
      if (err) {
        return res.send({err});
      }
      return res.send({data});
    })
  });

module.exports = router;
