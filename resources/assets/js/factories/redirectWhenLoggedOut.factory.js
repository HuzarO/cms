(function() {
    'use strict';

    angular
        .module('app')
        .factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

    redirectWhenLoggedOut.$inject = ['$q', '$injector'];
    function redirectWhenLoggedOut($q, $injector) {

        return {

            responseError: function(rejection) {

                // Need to use $injector.get to bring in $state or else we get
                // a circular dependency error
                var $state = $injector.get('$state');

                // Instead of checking for a status code of 400 which might be used
                // for other reasons in Laravel, we check for the specific rejection
                // reasons to tell us if we need to redirect to the login state
                var rejectionReasons = ['user_not_found', 'token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];
                // Loop through each rejection reason and redirect to the login
                // state if one is encountered
                angular.forEach(rejectionReasons, function(value, key) {
                    if(rejection.data.error === value) {

                        // If we get a rejection corresponding to one of the reasons
                        // in our array, we know we need to authenticate the user so
                        // we can remove the current user from local storage
                        localStorage.removeItem('user');

                        // Send the user to the auth state so they can login
                        $state.go('index');
                    }
                });

                return $q.reject(rejection);
            }
        }
    }
})();