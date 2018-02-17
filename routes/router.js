/***********************************
*           Arcethtech
* A-new generation of voting system
* and existing concepts.
*           Main router
************************************/

module.exports = function(app) {
    //INDEX
    app.get('/', function(req, res) {
        res.send("MAIN PAGE")
    })
};
