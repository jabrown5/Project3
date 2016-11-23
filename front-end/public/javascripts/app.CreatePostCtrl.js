angular.module('pottyCheck')
    .controller('CreatePostCtrl', function ($scope, $http, $rootScope) {

        $scope.createPost = function(facility_name, address, publicly_accessible, cleanliness, family_friendly, gender, latitude, longitude, api_key) {

            var api_key = $rootScope.api_key;
            $http({
                url: 'http://localhost:9292/api/restroom/',
                method: 'POST',
                params: {
                    facility_name: facility_name, 
                    address: address, 
                    publicly_accessible: publicly_accessible, 
                    cleanliness: cleanliness, 
                    family_friendly: family_friendly, 
                    gender: gender,
                    latitude: latitude,
                    longitude: longitude,
                    api_key: api_key
                }
            }).success(function (results) {
                $scope.message = results.message; // RENDERS MESSAGE INDICATING INCORRECT LOGIN CREDENTIALS
                console.log($scope.message)

            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };

    });