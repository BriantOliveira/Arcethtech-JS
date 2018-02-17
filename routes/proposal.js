/***********************************
*           Arcethtech
* A-new generation of voting system
* and existing concepts.
*           Proposal router
************************************/

module.exports = function(app) {
    //INDEX
    app.get('/proposal', function(req, res) {
        res.send('proposal main page')
    });
};
