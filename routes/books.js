var express = require('express');
var router = express.Router();

/* GET all books. */
router.get('/', function(req, res, next) {
	var db = req.db;
    var collection = db.get('bookcollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * GET single book.
 */
router.get('/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('bookcollection');
    collection.find({'_id':req.params.id},{},function(e,docs){
		if(docs) {
			res.json(docs[0]);
		}
		else {
			res.json({})
		}
    });
});

module.exports = router;