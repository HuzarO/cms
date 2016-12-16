(function() {
    'use strict';

    angular
        .module('app.index')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['LanguageService'];

    function IndexController(LanguageService) {
        var vm = this;

    }
})();