var Recipe = require('./models/recipe');
var request = require('request');
var formidable = require('formidable');

var handleGet = function (req, res) {
  Recipe.find({})
  .then(function (recipes) {
    res.json(recipes);
  })
  .catch(function (err) {
    res.send(err);
  })
};

var handlePost = function (req, res) {
  var title = req.body.title;
  var ingredients = req.body.ingredients;
  var directions = req.body.directions;
  var newRecipe = new Recipe({
    title: title,
    ingredients: ingredients,
    directions: directions
  });
  newRecipe.save().then(function (newRecipe) {
    res.send(201, newRecipe);
  })
  .catch(function (err) {
    res.send(err);
  })
};

var handleDelete = function (req, res) {
  console.log(req.params.recipe_id);
  Recipe.remove({
    _id: req.params.recipe_id
  }).then(function (recipe) {
    res.send(201);
  })
};

module.exports = function (app) {
  app.get('/api/recipes', handleGet);
  app.post('/api/recipes', handlePost);
  app.delete('/api/recipes/:recipe_id', handleDelete);
};

