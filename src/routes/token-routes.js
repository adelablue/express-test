let tokens = require('../data/token-repository');

module.exports = (app) => {
    app.get('/tokens', (req, res) => {
        res.render('tokens/index', {tokens: tokens.all()});
    });
}