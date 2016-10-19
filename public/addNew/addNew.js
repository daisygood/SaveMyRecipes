var addNew = angular.module('Recipe.addNew', []);

addNew.controller('addController', function ($scope, Recipes) {
  $scope.data = {};
  $scope.submissionSuccess = false;
  $scope.add = function () {
    for (var key in $scope.data) {
      $scope.data[key] = encodeURIComponent($scope.data[key]);
    }
    Recipes.addMore($scope.data).then(function () {
      $scope.submissionSuccess = true;
      $scope.data = null;
    });
  }

})