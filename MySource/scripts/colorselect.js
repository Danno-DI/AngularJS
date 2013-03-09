function colorCtrl($scope) {
	$scope.colors = [
		{name:'black', shade:'dark'},
		{name:'white', shade:'light'},
		{name:'red', shade:'dark'},
		{name:'blue', shade:'dark'},		
		{name:'yellow', shade:'light'}
	];
	$scope.color = $scope.colors[3]; // blue
}