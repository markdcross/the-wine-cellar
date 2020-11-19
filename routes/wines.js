const db = require('../models');

module.exports = (app) => {
    app.get('/wines', (req, res) =>
        db.Wine.findAll({})
            .then((wines) => {
                const context = {
                    contextWines: wines.map((wine) => {
                        return {
                            wine_name: wine.wine_name,
                            winery: wine.winery,
                            style: wine.style,
                            description: wine.description,
                            rating: wine.rating,
                            consumed: wine.consumed,
                        };
                    }),
                };
                res.render('wines', {
                    wines: context.contextWines,
                });
            })
            .catch((err) => console.log(err))
    );
};
