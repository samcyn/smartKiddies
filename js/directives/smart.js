//this directive add element to an array on click on this particular element.
app.directive('rotate', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			//console.log(scope.total);
			element.hover(function(){
				$(this).removeClass('rotateLeft');
				$(this).addClass('rotateRight');
			}).mouseleave(function(){
				$(this).removeClass('rotateRight');
				$(this).addClass('rotateLeft');
			});
		}
	}
});

 



