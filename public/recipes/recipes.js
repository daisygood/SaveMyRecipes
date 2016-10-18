var recipes = angular.module('Recipe.recipes', []);

recipes.controller('ReceipesController', function ($scope, Recipes) {
  $scope.recipes = {};

  var getAllRecipes = function () {
    Recipes.retrieveAll(function (data) {
      $scope.recipes = data.data;
    });
  };
  getAllRecipes();

});