(function() {
    'use strict';
    
    angular
        .module('app.translatable')
        .controller('TranslatableController', TranslatableController);
    
    TranslatableController.$inject = ['$uibModalInstance', 'items'];
    
    function TranslatableController($uibModalInstance, items) {
        var vm = this;
        vm.items = items;
    }
})();