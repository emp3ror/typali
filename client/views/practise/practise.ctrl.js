'use strict';

angular.module('typali')

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('app.practise', {
		url:'/practise',
		views : {
			'container@': {
				templateUrl: 'views/practise/practise.tpl.html',
				controller: 'practiseCtrl',
				controllerAs : "vm"
			}
		}
	})
	.state('app.practise.param', {
		url:'/:param',
		views : {
			'container@': {
				templateUrl: 'views/practise/practise.tpl.html',
				controller: 'practiseCtrl',
				controllerAs : "vm"
			}
		}
	});
  
}])

.controller('practiseCtrl', PractiseCtrl);

PractiseCtrl.$inject = ['$stateParams'];
function PractiseCtrl ($stateParams) {
	var vm = this;

	var param = $stateParams.param;

};