/***********************************
*       Arcethtech
*   A-new generation of voting system
*   and existing concepts.
*   v.1.0.0 Beta
************************************/

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

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(verifyAuthentication)

// Setting up the frontend  views engine
app.engine('bhs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('views engine', 'hbs');

//Static public directory
app.use(express.static('./public'))

// Routes

// 404 Error page
app.use((req, res, next) => {
    if (err.status == 404) {

        //User frendly error message display
        res.send('* 404 ERROR *');
    };
});

//Listen to PORT number
app.listen(PORT, function() {
    console.log('Arcethtech listening on port ', PORT);
});
