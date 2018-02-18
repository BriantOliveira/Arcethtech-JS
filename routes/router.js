/***********************************
*           Arcethtech
* A-new generation of voting system
* and existing concepts.
*           Main router
************************************/
let proposal = require('../json/proposal')
module.exports = function(app) {

    // INDEX
    app.get('/', function(req, res) {
        res.render('proposal-index.hbs')
    });

    app.get('/proposals', function(req, res) {
        res.render('index.hbs', {proposal: proposal})
        // res.render('proposal')
    });

    app.get('/proposals', function(req, res) {
        res.send('index.hbs')
    })

    //SHOW
    // app.get('/:index', (req, res) => {
    //     res.render('proposal')
    //     // res.render('show-proposals', {proposal: proposals[req.params.indexl], comments: comments});
    // });

    //CREATE
    // app.post('/', (req, res) => {
    //     proposal.unshift(req.body);
    //     res.redirect('/')
    // });
    //
    // //EDIT
    // app.get('/:index/edit', (req, res) => {
    //     res.render('yooo')
    //     // res.render('edit-proposals', { proposal: proposals[req.params.index]});
    // });
    //
    // //UPDATE
    // app.put('/:index', (req, res) => {
    //     res.redirect('/proposal/${req.params.index}')
    // });
    //
    // //DESTROY
    // app.delete('/:index', (req, res) => {
    //     res.redirect('/')
    // });

    //Temp
    app.get('/internet', function(req, res) {
        res.render('index.hbs')
    });

    app.get('/ceremony', function(req, res) {
        res.render('ceremony.hbs')
    });

    app.get('/food', function(req, res) {
        res.render('food.hbs')
    })

};
