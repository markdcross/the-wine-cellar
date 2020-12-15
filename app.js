// *=============================================================
// * Dependencies
// *=============================================================
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// Database
const db = require('./models');

// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 4848;

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//* =============================================================
//* Routes
//* =============================================================
// HTML routes
require('./routes/html-routes.js')(app);
// Wine routes
require('./routes/wines')(app);

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
