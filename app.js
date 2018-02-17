/***********************************
*       Arcethtech
*   A-new generation of voting system
*   and existing concepts.
*   v.1.0.0 Beta
************************************/
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('express-handlebars')
const jwt = require('jsonwebtoken')
const path = require('path')
const favicon = require('serve-favicon')


// Initializing express
const app = express()

// Defining PORT number
const PORT = process.env.PORT || 8000

/***************************************
* Check for a token on request
****************************************/

let verifyAuthentication = (req, res, next) => {
    if (typeof req.cookies.jtwToken === 'undefined' || req.cookies.jtwToken === null){
        req.user = null;
    } else {
        var token = req.cookies.jtwToken;

        //Synchronous verification
        try {
            decodeToken = jwt.verify(token, process.env.SECRETKEY);
            req.user = decodeToken.id;
        }catch(err) {
            console.log('Authentication Error:', err.message)
        };
    };
    next();
};

/***************************************
* Middlewarez
****************************************/

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(verifyAuthentication)

// Setting up the frontend  views engine
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('views engine', 'hbs');

//Static public directory
app.use(express.static('./public'))

// Routes
require('./routes/router.js')(app);

// 404 Error page
// app.use(function (req, res, next) {
//     var err = new Error('Not Found...');
//     err.status = 404;
//     next(err);
// });
// app.use(function (err, req, res, next) {
//     if (err.status == 404) {
//
//         //User frendly error message display
//         res.redirect('/404.html');
//     };
// });

//Listen to PORT number
app.listen(PORT, function() {
    console.log('Arcethtech listening on port ', PORT);
});
