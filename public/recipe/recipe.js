var recipeDetails = angular.module('Recipe.recipe', []);

recipeDetails.controller('RecipeDetailsController', function ($scope, $stateParams) {
  $scope.recipe = [];

  var findCurrentRecipe = function () {
    var recipes = $scope.$parent.recipes;
    if (recipes.length > 0) {
      $scope.recipe = recipes.filter(function (recipe) {
        return recipe._id === $stateParams.recipeId;
      });
    }
  }

  findCurrentRecipe();

});