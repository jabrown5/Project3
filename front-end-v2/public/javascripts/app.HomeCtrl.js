angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope) {

        $scope.posts = [];

        // var locationName = ;
        // var geolocation = ;
        // var comments = ;

        $scope.fetch = function() {
            $http.get('http://localhost:9292/api/restroom/').success(function (results) {
            // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {
                $scope.posts = [results[0].facility_name, results[0].latitude, results[0].longitude, results[0].cleanliness]
                //console.log(results[0].facility_name, results[0].latitude, results[0].longitude, results[0].cleanliness)
                console.log($scope.posts)
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        }

        $scope.fetch();

    });