var services = angular.module('Recipe.services', []);

services.factory('Recipes', function ($http) {
  var retrieveAll = function (callback) {
    return $http({
      method:'GET',
      url:'/api/recipes'
    })
    .then(function (resp) {
      console.log(resp);
      callback(resp);
    })
  };

  var addMore = function (data) {
    return $http({
      method:'POST',
      url:'/api/recipes',
      data: data
    });
  }

  return {
    retrieveAll: retrieveAll,
    addMore: addMore
  }

})