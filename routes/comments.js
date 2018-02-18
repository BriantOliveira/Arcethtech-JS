const express = require('express');

module.exports = function({mergeParams: true}, app) {

    //CREATE
    app.post('/', (req, res) => {
        comments.unshift(req.body);
        res.redirect('/proposal/0')
    });

    //DELETE
    app.delete('/:index', (req, res) => {
        res.redirect('/proposals/${req.params.id}')
    });
};
