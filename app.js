// *=============================================================
// * Dependencies
// *=============================================================
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

// Database
const db = require('./models');

// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 4848;

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//* =============================================================
//* Routes
//* =============================================================
require('./routes/html-routes.js')(app);
require('./routes/cellar')(app);

//* =============================================================
//* Connecting to Mongoose db and logging port
//* =============================================================
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
