angular.module('uiTester', ['ui.bootstrap']);

function DropdownCtrl($scope) {
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}

var ModalDemoCtrl = function ($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.items = ['item1', 'item2'];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};