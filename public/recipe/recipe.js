var recipeDetails = angular.module('Recipe.recipe', []);

recipeDetails.controller('RecipeDetailsController', function ($scope, $stateParams) {
  $scope.recipe = [];

  var findCurrentRecipe = function () {
    var recipes = $scope.$parent.recipes;
    if (recipes.length > 0) {
      $scope.recipe = recipes.filter(function (recipe) {
        return recipe._id === $stateParams.recipeId;
      });
      for (var i = 0; i < recipes.length; i++) {
        for (var key in recipe[i]) {
          recipe[i][key] = decodeURIComponent(recipe[i][key]);
        }
      }
    }

  }


  findCurrentRecipe();

});