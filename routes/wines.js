const db = require('../models');

module.exports = (app) => {
    app.get('/api/wines', (req, res) =>
        db.Wine.findAll({})
            .then((wines) => {
                console.log(wines);
                res.sendStatus(200);
            })
            .catch((err) => console.log(err))
    );
};
