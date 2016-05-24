var mongoose = require('mongoose'),
Category = mongoose.model('Category');

exports.findAll = function(req, res){
  Category.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
 
  Category.findOne({'id':id},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Category.update({'id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d category', numberAffected);
    return res.send(raw);
  });
};

exports.add = function(req, res) {
  Category.create(req.body, function (err, category) {
    if (err) return console.log(err); 
    return res.send(category);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Category.remove({'id':id},function(result) {
    return res.send(result);
  });
};

exports.deleteAll = function(req, res){
  var id = req.params.id;
  Category.remove({},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Category.create( 
    { "id": "1", "name": "Color", "parent_id": "0" },
	{ "id": "2", "name": "White", "parent_id": "1" },
	{ "id": "3", "name": "Red", "parent_id": "1" },
	{ "id": "4", "name": "Black", "parent_id": "1" },
	{ "id": "5", "name": "Gray", "parent_id": "1" },
	{ "id": "6", "name": "Size", "parent_id": "0" },
	{ "id": "7", "name": "Small", "parent_id": "6" },
	{ "id": "8", "name": "Medium", "parent_id": "6" },
	{ "id": "9", "name": "Large", "parent_id": "6" },
	{ "id": "10", "name": "XLarge", "parent_id": "6" },
	{ "id": "11", "name": "XXLarge", "parent_id": "6" },
	{ "id": "12", "name": "Price-Range", "parent_id": "0" },
	{ "id": "13", "name": "0-100.000", "parent_id": "12" },
	{ "id": "14", "name": "100.000-250.000", "parent_id": "12" },
	{ "id": "15", "name": "250.000-500.000", "parent_id": "12" },
	{ "id": "16", "name": "500.000-1.000.000", "parent_id": "12" },
	{ "id": "17", "name": ">1.000.000", "parent_id": "12" },  
  function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};