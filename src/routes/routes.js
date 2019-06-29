let homeRoutes = require('./home-routes');
let tokenRoutes = require('./token-routes');

module.exports = (app) => {
    homeRoutes(app);
    tokenRoutes(app);
};