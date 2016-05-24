module.exports = function(app){
    var products = require('./controllers/products');
    app.get('/products', products.findAll);
    app.get('/products/:id', products.findById);
	app.get('/import/products', products.import);
    app.post('/products', products.add);
    app.put('/products/:id', products.update);
    app.delete('/products/:id', products.delete);
	app.delete('/products', products.deleteAll);
	
	
	var categories = require('./controllers/categories');
    app.get('/categories', categories.findAll);
	app.get('/categories/:id', categories.findById);
	app.get('/import/categories', categories.import);
    app.post('/categories', categories.add);
    app.put('/categories/:id', categories.update);
	app.delete('/categories/:id', categories.delete);
	app.delete('/categories', categories.deleteAll);
	
}