'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.detail',
	'myApp.view1',
	/*'myApp.detail',
	'myApp.view3',*/
	'myApp.directive'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters'});
}]).controller('searchController',['$scope','$route',function($scope,$route){
	$scope.input = '';
	$scope.search = function(){
		$route.updateParams({itemList:'search',q:$scope.input});
	}
}]);
