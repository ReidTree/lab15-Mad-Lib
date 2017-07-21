var app = angular.module('myModule');

app.service('madService', function() {

var words = [];

this.getWords = function() {
  return words;
};

this.passEntry = function(e) {
  words = e;
};




});










// #: function(#){
//   var prom = $http({
//     method: "GET",
//     url: "https://www.reddit.com/r/redditstories/.json"
//   }).then(function redditCallback(response){
//     console.log(response);
//   }, function redditError(error){
//     console.log(error);
//   })
// };
