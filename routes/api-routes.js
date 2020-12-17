const db = require('../models');

module.exports = (app) => {
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

  app.post('/beer/add', ({ body }, res) => {
    db.Beer.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { beer: _id } }, { new: true })
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post('/wine/add', ({ body }, res) => {
    db.Wine.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { wine: _id } }, { new: true })
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
