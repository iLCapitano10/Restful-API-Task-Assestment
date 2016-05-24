var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  id :  { type: Number, min: 0, max: 100, ref: 'Product'},
  name : { type: String, ref: 'Product' },
  parent_id : { type: Number, min: 0, max: 100 , ref: 'Product'}
});
mongoose.model('Category', CategorySchema);
