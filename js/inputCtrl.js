var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, madService){

$scope.entryCvrt = function(entry){
  madService.passEntry(entry);
};


});
