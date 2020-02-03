'use strict';

angular.module('typali')

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('app.home', {
		url:'/',
		views : {
			'container@': {
				templateUrl: 'views/home/home.tpl.html',
				controller: 'HomeCtrl',
				controllerAs : 'vm'
			}
		}
	})

}])

.controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject = ['$scope','$rootScope'];
function HomeCtrl ($scope,$rootScope) {
	var vm = this;

	$rootScope.lang = "unicode";
	vm.lang = $rootScope.lang;
	
	vm.update = function() {
		console.log("lang",vm.lang);
		$rootScope.lang=vm.lang;
		$rootScope.$broadcast("lang",vm.lang);
	}
};