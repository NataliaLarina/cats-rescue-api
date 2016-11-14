console.log("hobbits and whatever")

var CatsApp = angular.module('CatsApp', ['ngRoute'])

// $scope = this
CatsApp.controller('CatsCtrl', function($scope, $http) {
  $scope.cats = []
  $scope.urlHost = 'http://localhost:3000/'
  $scope.addCat = function(name, note) {
    var cat = {name: name, note: note}
    $scope.cats.push(cat)
    console.log($scope.cats)
  }

  $scope.addCat = function(name, note) {
    $http({
      method: 'post',
      url: $scope.urlHost + 'cats/cat',
      name: name,
      note: note
      // params: { name: name, note: note }
    }).success(function(data){
      console.log(data)
      $scope.populateList()
    })
  }

  $scope.populateList = function() {
    $http.get($scope.urlHost + 'cats/cats').success(function(data){
        console.log(data)
        $scope.cats = data
    })
  }

  $scope.adoptCat = function(id) {
    $http.delete($scope.urlHost + 'cats/cat/' + id).success(function(data){
        console.log(data)
    })
  }


})
