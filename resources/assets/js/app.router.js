(function() {
    'use strict';

    angular
        .module('app.router', [])
        .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider'];
    function appRouter($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
        $httpProvider.interceptors.push('redirectWhenLoggedOut');

        $authProvider.loginUrl = '/api/v1/authenticate';

        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'content-pane@': {
                        templateUrl: 'templates/index/content-pane.html',
						controller: 'IndexController',
						controllerAs: 'vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }
})();