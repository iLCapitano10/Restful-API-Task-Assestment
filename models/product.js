var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  id:  String,
  name: String,
  price: String,
  category:{type: Schema.Types.ObjectId, ref: 'Category'}
    
});

mongoose.model('Product', ProductSchema);
