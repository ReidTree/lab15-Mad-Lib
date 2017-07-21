//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/entry', {
      controller: 'inputCtrl',
      templateUrl: 'entry.html'
    })
    .when('/madlib', {
      controller: 'responseCtrl',
      templateUrl: 'madlib.html'
    })
    .otherwise({
      redirectTo: '/entry'
    });




});
