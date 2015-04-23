(function () {
    angular.module("wittwitt").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function ($urlRouterProvider, $stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('catalogList', {
                    url: '/catalogs',
                    templateUrl: 'client/catalogs/views/catalogList.ng.html',
                    controller: 'catalogListController'
                })
                .state('catalogDetail', {
                    url: '/catalogs/:id',
                    templateUrl: 'client/catalogs/views/catalogDetail.ng.html',
                    controller: 'catalogDetailController',
                    resolve: {

                        // If a user is not logged in to the system, it won't be able to access
                        "currentUser": ['$meteor', function ($meteor) {
                            return $meteor.requireUser(); // http://angularjs.meteor.com/api/auth
                        }]
                    }
                });

            $urlRouterProvider.otherwise("/catalogs");
        }]);

    angular.module('wittwitt').run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
                // Catch the error thrown when the $requireUser promise is rejected
                if (error === "AUTH_REQUIRED") {
                    $state.go('catalogList');
                }
            });
        }]);
})();