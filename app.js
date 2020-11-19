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

// Handlebars
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })
);
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4848;

//* =============================================================
//* Routes
//* =============================================================
// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Wine routes
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
