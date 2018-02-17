/***********************************
*       Arcethtech
*   A-new generation of voting system
*   and existing concepts.
*   v.1.0.0 Beta
************************************/

const BodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('express-handlebars')
const jwt = require('jsonwebtoken')
const path = require('path')


// Initializing express
const app = express()

// Defining PORT number
const PORT = process.env.PORT || 8000

/***************************************
* Check for a token on request
****************************************/

let verifyAuthenticcation = (req, res, next) => {
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
