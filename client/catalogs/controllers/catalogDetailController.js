(function () {
    angular.module('wittwitt').controller('catalogDetailController', ['$meteor', '$scope', '$stateParams',
        function ($meteor, $scope, $stateParams) {

            $scope.catalogId = $stateParams.id;

            $scope.catalog = $meteor.object(Catalogs, $stateParams.id, false);

            $scope.save = function () {
                $scope.catalog.save();
            };

            $scope.cancel = function () {
                $scope.catalog.reset();
            }
        }]);
})();