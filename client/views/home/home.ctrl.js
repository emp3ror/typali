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

	/*if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	}

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
}

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
  	Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
      	var notification = new Notification("Hi there!");
      }
  });
  }*/
};