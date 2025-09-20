const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRoutes);

module.exports = app;
