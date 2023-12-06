const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const indexRouter = require('./routes');
const PORT = process.env.PORT || 4000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use('/', indexRouter);
app.use('/auth', require('./routes/authRoutes'));
app.listen(PORT, console.log('Escuchándo en el puerto ' + PORT));