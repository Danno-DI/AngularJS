var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('helloWorld', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<h1></h1>',
    compile: function(elem, attr, transclude) {
     transclude(elem, function(clone) {
        var txt = clone[0].textContent;
        clone[0].textContent = 'Hello, ' + txt + '!';
        elem.append(clone);
     });
    }
  };
});