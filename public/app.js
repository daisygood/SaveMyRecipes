var recipe = angular.module('Recipe', [
  'Recipe.services',
  'Recipe.addNew',
  'Recipe.recipes',
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

});

recipe.controller('RecipeController', function ($scope, $location) {
  $scope.isActive = function (location) {
     return location === $location.path();
  };
})
