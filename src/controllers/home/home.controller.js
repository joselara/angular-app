(function(angular) {
    'use strict';
    
    angular
        .module('myApp')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = [];
    
    function HomeController() {
        var vm = this;
        vm.message = 'Welcome to Angular 1.8.2 with Webpack!';
    }
    
})(angular);