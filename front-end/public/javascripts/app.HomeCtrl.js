console.log('HOME CTRL LINKED');


angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope) {

       // console.log('hello')
//this is our map
      
  var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng ({lat: 41.88425, lng: -87.63245}),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.map = new google.maps.Map(document.getElementById('map')), mapOptions;

  //$scope.markers = [];





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