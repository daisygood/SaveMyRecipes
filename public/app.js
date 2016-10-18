var recipe = angular.module('Recipe', [
  'Recipe.services',
  'Recipe.addNew',
  'Recipe.recipes',
  'ngRoute'
]);

recipe.config(function ($routeProvider) {
  $routeProvider
    .when('/add', {
      templateUrl: 'addNew/addNew.html',
      controller: 'addController'
    })
    .when('/allrecipes', {
      templateUrl: 'recipes/recipes.html',
      controller: 'ReceipesController'
    })
    .otherwise({
      redirectTo: '/add'
    })
});

recipe.controller('RecipeController', function ($scope, $location) {
  $scope.isActive = function (location) {
     return location === $location.path();
  };
})
