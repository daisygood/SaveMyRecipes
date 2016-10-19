var recipes = angular.module('Recipe.recipes', []);

recipes.controller('ReceipesController', function ($scope, Recipes) {
  $scope.recipes = {};

  var getAllRecipes = function () {
    Recipes.retrieveAll(function (data) {
      $scope.temp = data.data;

      for (var i = 0; i < $scope.temp.length; i++) {
        for (var key in $scope.temp[i]) {
          $scope.temp[i][key] = decodeURIComponent($scope.temp[i][key]);
        }
      }
      $scope.recipes = data.data;
      window.allrecipes = data.data;
    });
  };

  $scope.delete = function (id) {
    Recipes.deleteOne(id).then(function (data) {
      getAllRecipes();

    });
  };

  getAllRecipes();

});
