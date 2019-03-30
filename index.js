const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

require('dotenv').config();

app.use(favicon(path.join(__dirname, 'favicon.ico')));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.get('/', (req, res) => res.send({
  message: 'It\'s time for Node!'
}));

module.exports = app;
