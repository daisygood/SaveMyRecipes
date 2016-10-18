var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var RecipeSchema = new mongoose.Schema({
  title : String,
  details : String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);