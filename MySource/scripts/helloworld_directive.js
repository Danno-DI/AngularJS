angular.module('HelloApp', [])

angular.module('HelloApp').directive('testElemTransclude', function () {
    return {
        restrict: 'EA',
        transclude: true,
        scope: 'isolate',
        template: '<h3>heading 3</h3><p>preface... blah blah</p><div ng-transclude></div>',
    };
});

