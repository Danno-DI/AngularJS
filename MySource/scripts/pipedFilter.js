var engineerApp = angular.module('EngineerApp', [])

engineerApp.controller('PipedListController', function ($scope) {

    $scope.groups = [
                          { group: 'US' },
                          { group: 'EMEA' },
                          { group: 'APAC' }
    ];


    $scope.engineers = [
                          { name: 'Amit Mehta', group: 'US' },
                          { name: 'Sunyoo Kim', group: 'US' },
                          { name: 'Angela Cheng', group: 'EMEA' },
                          { name: 'Dwaipayan Das', group: 'EMEA' },
                          { name: 'Amit Sinha', group: 'EMEA' },
                          { name: 'Sunyoo Kim', group: 'US' },
                          { name: 'Chelo Romero', group: 'EMEA' },
                          { name: 'Nuno Mendes', group: 'EMEA' },
                          { name: 'Richard Eccles', group: 'EMEA' },
                          { name: 'Ian Constable', group: 'US' },
                          { name: 'Rute Oliveira', group: 'EMEA' },
                          { name: 'Elena Serghie', group: 'US' },
                          { name: 'Diederik Velsink', group: 'EMEA' },
                          { name: 'Ginika Ibeagha', group: 'EMEA' },
                          { name: 'Brandon Truong', group: 'US' },
                          { name: 'Ginika Ibeagha', group: 'EMEA' },
                          { name: 'Paul-Marie Brou', group: 'EMEA' },
                          { name: 'Hector Sandoval', group: 'APAC' },
                          { name: 'Terry Kim', group: 'US' },
                          { name: 'Daniel Iyoyo', group: 'EMEA' },
                          { name: 'Unassigned', group: 'Unassigned' }
                    ];

});

engineerApp.filter('EngineerAppFilter', function() {

    return function(items, engineerName){

		if (!engineerName)
		{
			return items;
		}
	
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){

            if (items[i].name.toLowerCase().indexOf(engineerName.toLowerCase()) != -1) {
                arrayToReturn.push(items[i]);
            }
        }       
        return arrayToReturn;
    };
});

engineerApp.filter('GroupAppFilter', function() {

    return function(items, groupName){
        
		if (!groupName)
		{
			return items;
		}

        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].group.toLowerCase().indexOf(groupName) != -1) {
                arrayToReturn.push(items[i]);
            }
        }       
        return arrayToReturn;
    };
});