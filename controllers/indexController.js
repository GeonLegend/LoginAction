const fs = require('fs');
const path = require('path');
const indexController = {
    userFind: (req, res) => {
        const usersData = fs.readFileSync(path.join(__dirname, '..', 'database', 'users.json'));
        const users = JSON.parse(usersData);
        const user = req.session.user;
        res.render('home', { user: user });
    }
};
module.exports = indexController;