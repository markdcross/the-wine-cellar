// *=============================================================
// * Dependencies
// *=============================================================
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

// Database
const db = require('./models');

// Sets up the Express App
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 4848;

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//* =============================================================
//* Routes
//* =============================================================
require('./routes/wines')(app);

//* =============================================================
//* Syncing our sequelize models and then starting our Express app
//* =============================================================
//TODO force: true (remove before production)
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
