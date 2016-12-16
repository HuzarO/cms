(function () {
	'use strict';
	
	angular
		.module('app')
		.factory('LanguageService', LanguageService);
	
	LanguageService.$inject = ['$http'];
	
	function LanguageService($http) {
		return {
			revalidate: revalidate
		};
		
		function revalidate(element) {
			return $http.post('/api/v1/language/get', {
				id: element.attr('data-translation-id'),
				languageId: localStorage.getItem('languageId')
			}).then(function (response) {
				if (response.data.status == 200) {
					return response.data.translation.translation;
				}
				
				return element.attr('data-original-translation');
			}, function() {
				return element.attr('data-original-translation');
			});
		}
	}
})();