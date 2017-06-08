(function() {
    "use strict";

    angular
        .module('typali')
        .directive('keyboard', KeyboardDirective);

    /* @ngInject */
    function KeyboardDirective() {
    	return {
    		controller: 'KeyboardCtrl',
            controllerAs: 'vm',
            replace: false,
            restrict: 'E',
            scope: {
                data: '=',
                keyboard : "<"
            },
            templateUrl: 'components/common/keyboard/keyboard.tpl.html'
    		// template: '<h3>Hello World!!</h3>'
    	};
    }
})();