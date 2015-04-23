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
                    controller: 'catalogDetailController'
                });

            $urlRouterProvider.otherwise("/catalogs");
        }]);
})();