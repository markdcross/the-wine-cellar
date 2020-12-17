const db = require('../models');

module.exports = (app) => {
  // db.Cellar.create({ name: 'My Cellar' })
  //   .then((winecellardb) => {
  //     console.log(winecellardb);
  //   })
  //   .catch(({ message }) => {
  //     console.log(message);
  //   });

  app.get('/cellar', (req, res) =>
    db.User.find({})
      .populate('beer')
      .populate('wine')
      .then((cellar) => {
        res.json(cellar);
      })
      .catch((err) => {
        res.json(err);
      })
  );

  app.User.aggregate([
    {
      $lookup:{
        from: "beer",
        localField: "beer",
        foreignField: "beer"
      }
    }
  ])
};

// module.exports = (app) => {
//     app.get('/wines', (req, res) =>
//         db.Wine.findAll({})
//             .then((wines) => {
//                 const context = {
//                     contextWines: wines.map((wine) => {
//                         return {
//                             wine_name: wine.wine_name,
//                             winery: wine.winery,
//                             style: wine.style,
//                             description: wine.description,
//                             rating: wine.rating,
//                             consumed: wine.consumed,
//                         };
//                     }),
//                 };
//                 res.render('wines', {
//                     wines: context.contextWines,
//                 });
//             })
//             .catch((err) => console.log(err))
//     );

//     app.post('/wines/add', (req, res) => {
//         let {
//             wine_name,
//             winery,
//             style,
//             description,
//             rating,
//             consumed,
//         } = req.body;
//         console.log(req.body);
//         let errors = [];

//         // Validate Fields
//         if (!wine_name) {
//             errors.push({ text: 'Please add a name' });
//         }

//         if (!winery) {
//             errors.push({ text: 'Please add a winery' });
//         }

//         if (!style) {
//             errors.push({ text: 'Please add a style' });
//         }

//         if (!description) {
//             errors.push({ text: 'Please add a description' });
//         }

//         if (!rating) {
//             errors.push({ text: 'Please add a rating' });
//         }
//         if (!consumed) {
//             errors.push({ text: 'Please be honest... did you drink it?' });
//         }

//         // Check for errors
//         if (errors.length > 0) {
//             res.render('add', {
//                 wine_name,
//                 winery,
//                 style,
//                 description,
//                 rating,
//                 consumed,
//             });
//         } else {
//             // Make lowercase and remove space after comma
//             style = style.toLowerCase();

//             // Insert into table
//             db.Wine.create({
//                 wine_name,
//                 winery,
//                 style,
//                 description,
//                 rating,
//                 consumed,
//             })
//                 .then((wine) => res.redirect('/wines'))
//                 .catch((err) => console.log(err));
//         }
//     });

//     // Search by style
//     app.get('/wines/search', (req, res) => {
//         let { term } = req.query;
//         console.log(term);
//         // Make lowercase
//         term = term.toLowerCase();

//         db.Wine.findAll({
//             where: { style: { [Op.like]: '%' + term + '%' } },
//         })
//             .then((wines) => res.render('wines', { wines }))
//             .catch((err) => console.log(err));
//     });
// };
