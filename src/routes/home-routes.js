module.exports = (app) => {

    //app.get('/', (req, res) => res.send('<b>GREAT</b>'));
    app.get('/', (req, res) => {
        res.render('home/index', {message: 'hello ejs'});
    });

    app.get('/thanks', (req, res) => {
        res.render('home/index', {message: 'Thanks for sending us a message'});
    });

    app.get('/contact', (req, res) => {
        res.render('home/contact', {
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
            res.render('home/contact', {
                email,
                message,
                errors
            });
        } else {
            res.redirect('/thanks');
        }
    });

}
