(function () {

  angular
  .module('typali')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('app.login', {
      url:'/login',
      views: {
        'container@' : {
          templateUrl: 'auth/login/login.tpl.html',
          controller: 'LoginCtrl',
          controllerAs : 'vm'
        }
      }
      
    });
  }])
  .controller('LoginCtrl', loginCtrl);

  loginCtrl.$inject = ['$location', 'authentication'];
  function loginCtrl($location, authentication) {
    var vm = this;

    vm.credentials = {
      email : "yo@hotmail.com",
      password : ""
    };

    vm.onSubmit = function () {
      authentication
        .login(vm.credentials)
        .error(function(err){
          console.log(err);
        })
        .then(function(){
          $location.path('profile');
        });
    };

  }

})();