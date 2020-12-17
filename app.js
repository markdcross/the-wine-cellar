// *=============================================================
// * Dependencies
// *=============================================================
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
// Sets up the Express App
const app = express();

// Port
const PORT = process.env.PORT || 4848;

//* =============================
//* Database
//* =============================
// Require the models folder
const db = require('./models');

// Connecting to Mongoose db and logging port
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/winecellardb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

// db.User.create({ username: 'Mark Cross' })
//   .then((dbUser) => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

//* =============================
//* Middleware
//* =============================
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

//* =============================================================
//* Routes
//* =============================================================
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

//* =============================================================
//* Server
//* =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
