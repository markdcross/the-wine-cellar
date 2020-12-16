// Display add wine form
module.exports = (app) => {
  // Landing route
  app.get('/', (req, res) => res.render('pages/landing'));
  // Index route
  app.get('/cellar', (req, res) => res.render('pages/index'));
  // Add wine route
  app.get('/cellar/add', (req, res) => res.render('pages/add'));
};
