/*jslint node: true */
/*jshint esversion: 6 */
'use strict';
//require('babel-register');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const swig = require('swig');

app.set('port', process.env.PORT || 3000);
if(process.env.NODE_ENV !== 'production') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  const page = swig.renderFile('index.html');
  res.status(200).send(page);
});

app.listen(app.get('port'), ()=> {
  console.log('Express server listening on port ' + app.get('port'));
});
