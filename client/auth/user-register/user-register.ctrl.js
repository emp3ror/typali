(function () {

  angular
  .module('typali')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('app.register', {
      url:'/register',
      views: {
        'container@' : {
          templateUrl: 'auth/user-register/user-register.tpl.html',
          controller: 'UserRegisterCtrl',
          controllerAs : 'vm'
        }
      }
      
    });
  }])
  .controller('UserRegisterCtrl', userRegisterCtrl);

  userRegisterCtrl.$inject = ['$location', 'authentication'];
  function userRegisterCtrl($location, authentication) {
    var vm = this;

  }

})();