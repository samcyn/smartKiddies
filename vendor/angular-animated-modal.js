var nganimatedModal=angular.module('angular-animated-modal',[]);

 nganimatedModal.directive('animatedModal',function(){
 	return{
 		restrict: 'A',
 		scope:{
 			options: '=',
 			beforeOpen: '&',
 			afterClose: '&'
 		},
 		link: function(scope, element, attrs){
 			var id="animatedmodal"+Math.floor(Math.random()*100000000); 
 			attrs.href=attrs.href||'animatedModal';
 			console.log(attrs.href);
 			scope.options=scope.options||{};
 			// Set element id
 			element.attr('id',id);
 			scope.setting={
 				modalTarget : attrs.href.replace('#','')
 			}
 			scope.setting=angular.extend(scope.setting,scope.options);
 			if(scope.setting.modalTarget!=attrs.href.replace('#','')){
 				element.attr('href','#'+scope.setting.modalTarget);
 			}
 			scope.beforeOpen=scope.beforeOpen||function(){};
 			scope.afterClose=scope.afterClose||function(){};

 			scope.setting.beforeOpen=function(){
 				scope.beforeOpen();
 			}
 			scope.setting.afterClose=function(){
 				scope.afterClose();
 			};
 			$('#'+id).animatedModal(scope.setting);
 		}
 	}
 });