const express = require('express')
const app = express.Router()
// const proposal = require('../json/proposal')

    app.get('/test', function(req, res) {
        res.render('proposal-index')
        // res.render('proposal')
    });

module.exports = app;
