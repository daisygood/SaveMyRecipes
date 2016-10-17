var addNew = angular.module('Recipe.addNew', []);

addNew.controller('addController', function ($scope, Recipes) {
  $scope.data = {};
  $scope.submissionSuccess = false;
  $scope.add = function () {
    Recipes.addMore($scope.data);
    $scope.data = null;
    $scope.submissionSuccess = true;
  }

})