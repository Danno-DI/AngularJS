var priorityApp = angular.module("priorityApp", [])

priorityApp.controller('DisplayCtrl' ,function($scope){ 
						$scope.incidents = [
											{issue:'One-critical', priority:'critical'}, 
											{issue:'Two-low', priority:'low'}, 
											{issue:'Three-high', priority:'high'}, 
											{issue:'Three.5-high', priority:'high'}, 
											{issue:'Four-medium', priority:'medium'}
											]
});

priorityApp.directive('incidentPriority', function() {
 
    var getImage = function(priority) {
         var imageSrc = [];
 
        switch(priority) {
             case 'critical':
                 imageSrc = { style : 'priority-critical', src: "Images/Priority_Critical.png"};
                 break;
             case 'high':
                 imageSrc = { style : 'priority-high', src: "Images/Priority_High.png"};
                 break;
             case 'medium':
                 imageSrc = { style : 'priority-medium', src: "Images/Priority_Medium.png"};
                 break;
             case 'low':
                 imageSrc = { style : 'priority-low', src: "Images/Priority_Low.png"};
                 break;
		}
        return imageSrc;
     }
 
    var linker = function(scope, element, attrs) {
		var displayImage = getImage(scope.incident.priority);
		scope.imageSource = displayImage.src;
		scope.spanPriority = displayImage.style;
     }

	return {
        restrict: 'E',
		replace: true,
        scope: 'isolate',
        template: '<td><img class="priority-image" ng-src="{{imageSource}}"/><span ng-class="spanPriority">It\'s {{incident.priority}}</span></td>',
		link: linker
    };
});										

