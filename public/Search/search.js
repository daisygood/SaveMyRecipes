var search = angular.module('Recipe.search', []);

search.controller('searchController', function ($scope, Recipes) {
  $scope.data;
  $scope.random
  $scope.randomChoose = function () {
    if ($scope.keyword) {
      var newArray = $scope.data.filter(function (data) {
        return data.title.toLowerCase().indexOf($scope.keyword.toLowerCase()) > -1
      });
      var randomIndex = Math.floor(Math.random() * newArray.length);
      $scope.random = newArray[randomIndex];
    } else {
      var randomIndex = Math.floor(Math.random() * $scope.data.length);
      $scope.random = $scope.data[randomIndex];
    }
    console.log($scope.random);
  };

  var getAllRecipes = function () {
    Recipes.retrieveAll(function (data) {
      $scope.temp = data.data;
      for (var i = 0; i < $scope.temp.length; i++) {
        for (var key in $scope.temp[i]) {
          $scope.temp[i][key] = decodeURIComponent($scope.temp[i][key]);
        }
      }
      $scope.data = data.data;
      $scope.randomChoose();
    });
  };

  getAllRecipes();

})