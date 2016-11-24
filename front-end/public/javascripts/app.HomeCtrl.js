console.log('HOME CTRL LINKED');


angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope) {

//this is our map
$scope.initMap = function () {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 8
       });
     }
});


















    //     $scope.fetch = function() {
    //         $http.get('http://localhost:9292/api/restroom/').success(function (results) {
    //         // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {
    //             $scope.posts = results
    //             console.log(results)
    //         }).error(function(err) {
    //             console.log('Fetch failed; it didn\'t happen');
    //             console.log(err);
    //         });
    //     }

    //     $scope.fetch();

    // });