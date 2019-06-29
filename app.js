let app = require('./views/src/init');
let routes = require('./views/src/routes/routes');

routes(app.express);

app.start();