console.log('hello, hobbit');

var CatsApp = angular.module('CatsApp', []);

CatsApp.controller('CatsCtrl', function($scope, $http) {
  $scope.cats = [];
  $scope.urlHost = 'http://localhost:3000';
  $scope.message = '';

  $scope.addCat = function(name, note) {
    // var cat = {name: name, note: note};
    // $scope.cats.push(cat);
    // console.log($scope.cats);
    $http( {
      url: $scope.urlHost + '/cats/cat',
      method: 'post',
      data: {name: name, note: note}
    }).success(function(data) {
      console.log(data);
      $scope.populateList();
    })
  }

  $scope.populateList = function() {
    $http.get($scope.urlHost + '/cats/cats').success(function(data) {
      console.log(data);
      $scope.cats = data;
    });
  }

  $scope.adoptCat = function(id) {
    console.log(id);
    $http({
      url: $scope.urlHost + '/api/cats/' + id,
      method: 'delete'
    }).success(function(data) {
      console.log('Your cat is adopted');
      $scope.message = data.message;
    })
  }

});

// console.log("hobbits and whatever")
//
// var CatsApp = angular.module('CatsApp', ['ngRoute'])
//
// // $scope = this
// CatsApp.controller('CatsCtrl', function($scope, $http) {
//   $scope.cats = []
//   $scope.urlHost = 'http://localhost:3000/'
//   // $scope.addCat = function(name, note) {
//   //   var cat = {name: name, note: note}
//   //   $scope.cats.push(cat)
//   //   console.log($scope.cats)
//   // }
//
//   $scope.addCat = function(name, note) {
//     var cat = {name: name, note: note}
//     $scope.cats.push(cat)
//     $http({
//       method: 'post',
//       url: $scope.urlHost + 'cats/cat',
//       data: cat
//       // params: { name: name, note: note }
//     }).success(function(data){
//       console.log(data)
//       $scope.populateList()
//     })
//   }
//
//   $scope.populateList = function() {
//     $http.get($scope.urlHost + 'cats/cats').success(function(data){
//         console.log(data)
//         $scope.cats = data
//     })
//   }
//
//   $scope.adoptCat = function(id) {
//     $http.delete($scope.urlHost + 'cats/cat/' + id).success(function(data){
//         console.log(data)
//     })
//   }
//
//
// })
