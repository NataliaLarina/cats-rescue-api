console.log("hobbits and whatever")

var CatsApp = angular.module('CatsApp', ['ngRoute'])

// $scope = this
CatsApp.controller('CatsCtrl', function($scope) {
  $scope.cats = []
  $scope.addCat = function(name, note) {
    var cat = {name: name, note: note}
    $scope.cats.push(cat)
    console.log($scope.cats)
  }
})
