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
HomeCtrl.$inject = ['$scope'];
function HomeCtrl ($scope) {
	var vm = this;


};