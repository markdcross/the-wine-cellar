// Display add wine form
module.exports = (app) => {
    // Index route
    app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
    // Add wine route
    app.get('/wines/add', (req, res) => res.render('add'));
};
