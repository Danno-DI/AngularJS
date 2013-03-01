function HelloWorldCtrl($scope) {
	$scope.action = function(){
		$scope.name='OK';
	}
	$scope.name='World';
}