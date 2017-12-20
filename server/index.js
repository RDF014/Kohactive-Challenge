require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mailRouter = require('./routes/mail');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use('/v1', mailRouter);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
