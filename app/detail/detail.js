'use strict';

angular.module('myApp.detail', ['ngRoute','myApp.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subject/:id', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', [
	'$scope',
	'$route',
	'$routeParams',
	'httpService',
	function($scope,$route,$routeParams,httpService) {
		$scope.movie = {};
		$scope.loading = true;
		$scope.title = 'Loading...';
     httpService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},
	 function(data){
		 $scope.movie = data;
		 $scope.loading = false;
		 $scope.title = data.title;
		 $scope.$apply();
	 })
}]);
