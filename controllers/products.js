var mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.findAll = function(req, res){
  Product.find({},function(err, results) {
	console.log('find All');
    return res.send(results);
  }).populate('category', 'id name parent_id');
};

exports.findById = function(req, res){
  var id = req.params.id;
 
  Product.findOne({'id':id}
  ,function(err, result) {
    return res.send(result);
  }).populate('category','id name parent_id');
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Product.update({'id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d products', numberAffected);
    return res.send(raw);
  });
};

exports.add = function(req, res) {
  Product.create(req.body, function (err, product) {
    if (err) return console.log(err); 
    return res.send(product);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Product.remove({'id':id},function(result) {
    return res.send(result);
  });
};

exports.deleteAll = function(req, res){
  var id = req.params.id;
  Product.remove({},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Product.create( 
    { "id": "1", "name": "Dress", "price": "100.000" , "category": "57440b4805b6c5102d799712"},
	{ "id": "2", "name": "Pant", "price": "150.000" , "category": "57440b4805b6c5102d79971e"},
	{ "id": "3", "name": "TShirt", "price": "200.000" , "category": "57440b4805b6c5102d799718"},
	{ "id": "4", "name": "JoggerPant", "price": "250.000" , "category": "57440b4805b6c5102d79971f"},
	{ "id": "5", "name": "Tie", "price": "450.000" , "category": "57440b4805b6c5102d799713"},
	{ "id": "6", "name": "Pyjama", "price": "90.000" , "category": "57440b4805b6c5102d799719"},
	{ "id": "7", "name": "Shoe", "price": "500.000" , "category": "57440b4805b6c5102d799720"},
	{ "id": "8", "name": "Sport Shoe", "price": "150.000" , "category": "57440b4805b6c5102d799715"},
	{ "id": "9", "name": "Sandal", "price": "50.000" , "category": "57440b4805b6c5102d799713"},
  function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};