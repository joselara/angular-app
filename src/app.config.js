(function(angular) {
    'use strict';
    
    angular
        .module('myApp')
        .config(routing);
    
    routing.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function routing($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: require('./controllers/home/home.template.html').default,
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }
    
})(angular);
