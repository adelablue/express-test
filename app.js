let express = require('express');
let app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded());

//app.get('/', (req, res) => res.send('<b>GREAT</b>'));
app.get('/', (req, res) => {
    res.render('index', {message: 'hello ejs'});
});

app.get('/thanks', (req, res) => {
    res.render('index', {message: 'Thanks for sending us a message'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        email: '',
        message: '',
        errors: []
    });
});

app.post('/contact', (req, res) => {

    let email = req.body.email.trim();
    let message = req.body.message.trim();
    let errors = [];

    if (!email) {
        errors.push("no emails!");
    }

    if (!message) {
        errors.push("no message!");
    }

    if (errors.length > 0) {
        res.render('contact', {
            email,
            message,
            errors
        });
    }

    res.redirect('/thanks');
});

app.listen(port, ()=> {console.log(`listening at the ${port}`)});