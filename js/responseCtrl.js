//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.controller('responseCtrl', function($scope, madService){
    $scope.madWords = madService.getWords();
    // console.log($scope.madWords);
});
