'use strict';

// Declare app level module which depends on views, and components

function run($rootScope, $location, authentication,$window) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      /*if (!authentication.isLoggedIn()) {
        $location.path('/login');
      }*/
    });


    $rootScope.facebookAppId = '[]'; // set your facebook app id here
    // initialise google analytics
   /* $window.ga('create', '', 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
          $window.ga('send', 'pageview', $location.path());
        });*/

      }


var app = angular.module('typali', [
  'ui.router',
  'ngSanitize',
  'angular-loading-bar'
])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('app',{
      url : '',
      views : {
        'header@' : {
          controller : 'HeaderCtrl',
          templateUrl : 'components/common/header/header.tpl.html',
          controllerAs : "vm"
        },
        'footer@' : {
          controller : 'FooterCtrl',
          templateUrl : 'components/common/footer/footer.tpl.html',
          controllerAs : "vm"
        }
      }
    })
    
    .state('app.404',{
      url : '/404',
      views : {
        'header@' : {
          templateUrl : 'components/common/header/header.tpl.html'
        }
      }
    });

    $locationProvider.html5Mode(true);


    
}])
.run(['$rootScope', '$location', 'authentication', '$window', run]);