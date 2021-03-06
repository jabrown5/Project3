angular.module('pottyCheck')
    .controller('PostsCtrl', function($scope, $http, $rootScope) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292').success(function (results) {
                $scope.posts = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        }

        $scope.fetch();

    });