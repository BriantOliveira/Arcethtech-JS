/***********************************
*           Arcethtech
* A-new generation of voting system
* and existing concepts.
*           Proposal router
************************************/
const express = require('express');


module.exports = function(app) {
    //INDEX
    app.get('/proposal', function(req, res) {
        res.send('proposal main page')
    });

    //NEW
    app.get('/new', (req, res) => {
        //res.render('new-proposal')
        res.send('All the new proposals')
    });

    //SHOW
    app.get('/:index', (req, res) => {
        res.render('show-proposals', {proposal: proposals[req.params.index], comments: comments});
    });

    //CREATE
    app.post('/', (req, res) => {
        proposals.unshift(req.body);
        res.redirect('/')
    });

    //EDIT
    app.get('/:index/edit', (req, res) => {
        res.render('edit-proposals', { proposal: proposals[req.params.index]});
    });

    //UPDATE
    app.put('/:index', (req, res) => {
        res.redirect('/proposals/${req.params.index}')
    });

    //DESTROY
    app.delete('/:index', (req, res) => {
        res.redirect('/')
    });
};
