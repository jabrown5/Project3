angular.module('pottyCheck')
    .controller('FindCtrl', function($scope, $http, $rootScope) {

        $scope.potties = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/api/restroom/').success(function (results) {
                $scope.potties = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        }

        $scope.fetch();
        console.log($scope.potties);
    });