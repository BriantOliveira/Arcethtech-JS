/***********************************
*       Arcethtech
*   A-new generation of voting system
*   and existing concepts.
*   v.1.0.0 Beta
************************************/
if (!process.env.PORT) {
  require('dotenv').config()
};

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('express-handlebars')
const jwt = require('jsonwebtoken')
const path = require('path')
const favicon = require('serve-favicon')

// Initializing express
const app = express()

// Routes
require('./routes/router')(app);
require('./routes/comments')(app);
// require('./routes/proposal')(app);
// require('./routes/index-prop')(app);


// Defining PORT number
const PORT = process.env.PORT || 8042

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
// Setting up the frontend  views engine
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('views engine', 'hbs');


// Setup handlebars view engine and pass in parameters
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(verifyAuthentication)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//Static public directory
app.use(express.static('./public'))


app.listen(PORT, function() {
    console.log('Arcethtech listening on port ', PORT);
});
module.exports = app;
