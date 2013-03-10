angular.module('website', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/about', {template:'partials/about.html'}).
			when('/detail', {template:'partials/about.html'}).
			otherwise({redirectTo:'/home', template:'partials/htome.html'});
		});
		
function mainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}