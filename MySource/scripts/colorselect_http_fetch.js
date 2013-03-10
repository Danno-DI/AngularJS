function colorCtrl($scope, $http) {
	$scope.url = 'colors.json';
	$scope.colors = [];
	
	$scope.handleColorsLoaded = function (data, status) {
		$scope.colors = data;
		$scope.color = $scope.colors[3]; // blue
	}
	$scope.fetchData = function(){
		$http.get($scope.url).success($scope.handleColorsLoaded);
	}

	$scope.fetchData();
}