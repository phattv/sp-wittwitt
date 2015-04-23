(function () {
    angular.module("wittwitt").controller("catalogListController", ['$scope', '$meteor',
        function ($scope, $meteor) {

            $scope.catalogs = $meteor.collection(Catalogs);

            $scope.add = function () {
                $scope.newCatalog.owner = $scope.$root.currentUser._id;
                $scope.catalogs.push($scope.newCatalog);
                $scope.newCatalog = '';
            };

            $scope.remove = function (catalog) {
                $scope.catalogs.remove(catalog);
            };

            $scope.removeAll = function () {
                $scope.catalogs.remove();
            };
        }]);
})();