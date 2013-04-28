function HelloWorldCtrl($scope) {
	$scope.action = function(){
		$scope.name=' from the action function';
	}
	$scope.name='World';
}