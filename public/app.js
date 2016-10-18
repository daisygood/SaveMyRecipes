var recipe = angular.module('Recipe', [
  'Recipe.services',
  'Recipe.addNew',
  'Recipe.recipes',
  'Recipe.recipe',
  'ui.router'
]);

recipe.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/add');

  $stateProvider
    .state('add', {
      url: '/add',
      templateUrl: 'addNew/addNew.html',
      controller: 'addController'
    })
    .state('allrecipes', {
      url: '/allrecipes',
      templateUrl: 'recipes/recipes.html',
      controller: 'ReceipesController'
    })
    .state('allrecipes.recipe', {
      url:'/{recipeId}',
      templateUrl: 'recipe/recipe.html',
      controller: 'RecipeDetailsController',
    })
});

recipe.controller('RecipeController', function ($scope, $location) {
  $scope.isActive = function (location) {
     return $location.path().indexOf(location) > -1;
  };
})
