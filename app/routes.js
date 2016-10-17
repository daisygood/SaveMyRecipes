var Recipe = require('./models/recipe');

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
  var details = req.body.details;
  Recipe.create({
    title: title,
    details: details
  })
  .then(function (newRecipe) {
    res.send(201, newRecipe);
  })
  .catch(function (err) {
    res.send(err);
  })
}

module.exports = function (app) {
  app.get('/api/recipes', handleGet);
  app.post('/api/recipes', handlePost);
};

