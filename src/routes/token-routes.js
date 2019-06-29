let tokens = require('../data/token-repository');

let sendDetails = (id, res) => {

    let token = tokens.getById(id);

    if (!token) {
        res.sendStatus(404);
    } else {
        res.render('tokens/details', {token: token});
    }

};


module.exports = (app) => {
    app.get('/tokens', (req, res) => {
        let id = req.query.id;

        if (id) {
            sendDetails(id, res);
        } else {
            res.render('tokens/index', {tokens: tokens.all()});
        }

    });

    app.get('/tokens/:id', (req, res) => {
        sendDetails(req.params.id, res);
    })
}