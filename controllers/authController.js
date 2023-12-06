const users = require('../database/users.json');
const authController = {
    getLogin: (req, res) => {
        res.render('login', { errorMessage: '' });
    },
    postLogin: (req, res) => {
        const { email, password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.render('login', { errorMessage: 'El usuario o contraseña es incorrecto' });
        }
    },
    logout: (req, res) => {
        req.session.user = null;
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    }
};
module.exports = authController;