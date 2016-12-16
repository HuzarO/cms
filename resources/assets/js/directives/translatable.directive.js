(function() {
    'use strict';

    angular
        .module('app')
        .directive('translatable', translatable);

    translatable.$inject = ['$uibModal', 'LanguageService'];

    function translatable($uibModal, LanguageService) {
        var directive = {
        	replace: true,
            restrict: 'A',
            link: link
        };

        return directive;
	
		function link(scope, element, attrs, controller, transcludeFn) {
		    $(element).addClass('translatable').attr('data-translation-id', attrs.translatable).attr('data-original-translation', element.text());
            $(element).on('click', function(e) {
                e.preventDefault();
				var modalInstance = $uibModal.open({
				    templateUrl: 'templates/translatable/modal.html',
                    controller: 'TranslatableController',
                    controllerAs: 'vm',
                    backdrop: true,
					resolve: {
				    	items: function() {
				    		return {
								translationId: attrs.translatable,
								originalTranslation: element.text()
							}
						}
					}
				});
            });
			
			LanguageService.revalidate(element).then(function(response) {
				element.text(response);
			});
        }
    }
})();