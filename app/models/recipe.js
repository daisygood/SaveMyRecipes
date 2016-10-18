var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var RecipeSchema = new mongoose.Schema({
  title : String,
  ingredients : String,
  directions: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);