let express = require('express');
let app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//app.get('/', (req, res) => res.send('<b>GREAT</b>'));
app.get('/', (req, res) => {
    res.render('index', {message: 'hello ejs'});
});

app.listen(port, ()=> {console.log(`listening at the ${port}`)});