Catalogs = new Mongo.Collection("catalogs");

if (Meteor.isClient) {
    angular.module('wittwitt', ['angular-meteor']);

    angular.module("wittwitt").controller("CatalogListController", ['$scope', '$meteor',
        function ($scope, $meteor) {

            // Call server function and set to Catalogs collection
            Meteor.call('getDataFromApi', function (error, data) {
                if (error) {
                    $scope.errorMessage = error.message;
                    console.log(error);
                } else {
                    for (var i = 0; i < data.length; i++) {
                        Catalogs.insert(data[i]);
                    }
                    console.log(data);
                }
            });

            $scope.catalogs = $meteor.collection(Catalogs)

        }]);
}

if (Meteor.isServer) {

    Meteor.methods({

        // Get data from API
        getDataFromApi: function () {
            Catalogs.remove({});

            var api = 'http://watchaa.com/fandf/index.php/catalogapi/';
            var result = HTTP.get(api);
            if (result.statusCode === 200) {
                return JSON.parse(result.content);
            } else {
                return JSON.parse(result.content);
            }
        }
    });

    Meteor.startup(function () {

        // Insert sample Catalog if empty
        if (Catalogs.find().count() === 0) {

            var sampleCatalog = {
                arbo: "food/candies/sample",
                currency: "VND",
                maxprice: "100000",
                minprice: "50000",
                name: "sample product",
                shortdesc: "sample description",
                thumb: "/img/sample.jpg"
            };

            Catalogs.insert(sampleCatalog);
        }
    })
}