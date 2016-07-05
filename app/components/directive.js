/**
 * Created by 微软中国 on 2016/6/12.
 */
(function(angular){
	"use strict";
	angular.module('myApp.directive',[])
		.directive('autoActive',['$location',function($location){
			return {
				link:function(scope,element,attributes){
					scope.$location = $location;
					scope.$watch('$location.url()',function(now,old){
						var aLink = element.children().attr('href').substr(1);
						if(now.startsWith(aLink)){
							element.parent().children().removeClass(attributes.autoActive);
							element.addClass(attributes.autoActive);
						}
					});
				}
			}
		}]);
})(angular);

/*(function(angular){
	"use strict";
	angular.module('myApp.directive',[]).
	directive('autoActive',['$location',function($location){
		return {
			link:function(scope,element,attributes){
				scope.$location = $location;
				scope.$watch('$location.url()',function(now,old){
					var aLink = element.children().attr('href').substr(1);
					if(now.startsWith(aLink)){
						element.parent().children().removeClass(attributes.autoActive);
						element.addClass(attributes.autoActive);
					}
				});
			}
		}
	}]);
})(angular);*/


