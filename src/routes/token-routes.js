let express = require('express');
let tokens = require('../data/token-repository');
let logger = require('../logger');
let router= express.Router();

router.use(logger);

let sendDetails = (id, res) => {

    let token = tokens.getById(id);

    if (!token) {
        res.sendStatus(404);
    } else {
        res.render('tokens/details', {token: token});
    }

};

router.get('/tokens', (req, res) => {
    let id = req.query.id;

    if (id) {
        sendDetails(id, res);
    } else {
        res.render('tokens/index', {tokens: tokens.all()});
    }

});

router.get('/tokens/:id', (req, res) => {
    sendDetails(req.params.id, res);
})


module.exports = (app) => {
    app.use(router);
}