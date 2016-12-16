(function() {
    'use strict';

    angular
        .module('app', [
            'satellizer',
            'ngStorage',
            'ngAnimate',
            'ngTouch',
            'ui.router',
            'ui.bootstrap',
            
            'app.router',

            'app.index',
            'app.translatable'
        ]);
})();