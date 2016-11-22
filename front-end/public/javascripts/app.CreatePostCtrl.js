angular.module('pottyCheck')
    .controller('CreatePostCtrl', function ($scope, $http) {
        $scope.messages = [
            'please fill out all fields',
            'thanks for your post. view the blog to see it live'
        ];
        $scope.message = $scope.messages[0];
        $scope.createPost = function(facility_name, address, latitude, longitude, publicly_accessible, cleanliness, family_friendly, gender, user_submission) {
            $http({
                url: 'http://localhost:9292/api/restroom/',
                method: 'POST',
                params: {
                    facility_name: facility_name, 
                    address: address, 
                    latitude: latitude,
                    longitude: longitude,
                    publicly_accessible: publicly_accessible, 
                    cleanliness: cleanliness, 
                    family_friendly: family_friendly, 
                    gender: gender,
                    user_submission: user_submission}
            }).success(function (results) {
                $scope.message = $scope.message[1];
            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };

    });