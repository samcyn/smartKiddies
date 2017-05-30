app.controller("siteController", ["$scope", "$state", "NgMap", function($scope, $state, NgMap){
	
	$scope.options = {
		color: '#39BEB9',		// Define background color. HEX, HSL, RGB, RBA
		animatedIn: 'zoomIn',		// Transition when the modal goes in
		animatedOut: 'zoomOut',		// Transition when the modal goes out
		animationDuration: '.6s',	// Animation duration in seconds
		overflow: 'scroll'		// This makes your modal scrollable or not
	};

	// Event function executed before open modal.
	$scope.beforeOpen = function(){
		console.log('Hello');
	};

	// Event function executed after close modal.
	$scope.afterClose = function(){
		console.log('Bye');
	};

	$scope.showHints = true;

    $scope.user = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      update: "",
      developmentPartner: "",
      developContent: "",
      shareContent: "",
      fundraise: "",
      research: ""
    };

	    var vm = this;
        NgMap.getMap().then(function(map) {
          vm.showCustomMarker= function(evt) {
            map.customMarkers.foo.setVisible(true);
            map.customMarkers.foo.setPosition(this.getPosition());
          };
          vm.closeCustomMarker= function(evt) {
            this.style.display = 'none';
          };
        });
}]);

