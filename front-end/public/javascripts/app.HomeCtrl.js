angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope, uiGmapGoogleMapApi) {


        // TEST CODE FROM:  https://github.com/angular-ui/angular-google-maps/issues/1849
        uiGmapGoogleMapApi.then(function(maps){
            // Configuration needed to display the road-map with traffic
            // Displaying Ile-de-france (Paris neighbourhood)
            maps.visualRefresh = true;
            $scope.map = {
                center: {
                  latitude: -23.598763,
                  longitude: -46.676547
                },
                zoom: 13,
                options: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling ( like ugly people ) the google.map helper outside of the function
                    streetViewControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    zoomControl: false
                }, 
                showTraficLayer:true
            };
            console.log($scope.map); 
            $scope.isOffline = false;
        })

    // $scope.markers = []

    // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // uiGmapGoogleMapApi.then(function(maps) {

    // });


        // $scope.posts = [];

        // $scope.fetch = function() {
        //     $http.get('http://localhost:9292/api/restroom/').success(function (results) {
        //     // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {
        //         $scope.posts = results
        //         console.log(results)
        //     }).error(function(err) {
        //         console.log('Fetch failed; it didn\'t happen');
        //         console.log(err);
        //     });
        // }

        // $scope.fetch();

    });


    // angular.module('myApplicationModule', ['uiGmapgoogle-maps']);


// .controller("someController", function($scope, uiGmapGoogleMapApi) {
//     // Do stuff with your $scope.
//     // Note: Some of the directives require at least something to be defined originally!
//     // e.g. $scope.markers = []

//     // uiGmapGoogleMapApi is a promise.
//     // The "then" callback function provides the google.maps object.
//     uiGmapGoogleMapApi.then(function(maps) {

//     });
// });