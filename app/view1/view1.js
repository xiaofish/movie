'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.service'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:itemList/:page?', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', [
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function ($scope, $route, $routeParams, httpService) {
			var pageSize = 5;
			$scope.page = parseInt($routeParams.page || 1);
			$scope.totalPage = 0;
			var start = ($scope.page - 1) * 5;
			$scope.loading=true;
			httpService.jsonp(
				'https://api.douban.com/v2/movie/' + $routeParams.itemList,
				{
					start: start,
					count: pageSize,
					q: $routeParams.q
				},
				function (data) {
					$scope.loading = false;
					$scope.title = data.title;
					$scope.total = data.total;
					$scope.movies = data.subjects;
					$scope.totalPage = Math.ceil(data.total / pageSize);
					$scope.$apply();
				});
			$scope.go = function (page) {
				if (0 < page && page < $scope.totalPage + 1) {
					$route.updateParams({page: page});
				}
			}
		}]);
