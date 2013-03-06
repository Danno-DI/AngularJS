function ClickCounterCtrl($scope) {
	$scope.action = function(){
		
		$scope.counter += 1;
	
		if($scope.counter == $scope.maxClicks ){
			$scope.priorityLevel = "Critical"
			$scope.imageSource = "Images/Priority_Critical.png"
			$scope.divStatus = "statusdiv statuscritical"
			$scope.setReset(true);		
		}
		if($scope.counter == 1 ){
			$scope.setReset(false);		
		}
	}
	
	$scope.setReset = function(reset){
		$scope.reset = reset;
		if(reset){
			$scope.counter = 0;		
		}
		else
		{
			$scope.priorityLevel = "low"
			$scope.imageSource = "Images/Priority_Low.png"
			$scope.divStatus = "statusdiv statuslow"		
		}
		
	}

	// Initialise
	$scope.setReset(false);
	$scope.maxClicks = 3;
	$scope.counter = 0;
}