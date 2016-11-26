angular.module('pottyCheck')
    .controller('FindCtrl', function($scope, $http, $rootScope) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/api/restroom').success(function (results) {
                $scope.posts = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        }

        $scope.fetch();
    });


