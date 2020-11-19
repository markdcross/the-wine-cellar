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

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4848;

//* =============================================================
//* Routes
//* =============================================================
// HTML routes
require('./routes/html-routes.js')(app);
// Wine routes
require('./routes/wines')(app);

//* =============================================================
//* Syncing our sequelize models and then starting our Express app
//* =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
