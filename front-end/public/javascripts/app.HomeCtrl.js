angular.module('pottyCheck')
    .controller('HomeCtrl', function($scope, $http, $rootScope) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/api/restroom/').success(function (results) {
            // $http.get('http://localhost:9292/api/restroom/3/comments').success(function (results) {
                $scope.posts = results
                console.log(results)
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        }

        $scope.fetch();

         var autocomplete;
      var pottySearch;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        postal_code: 'short_name'
      };

      // function initAutocomplete() {
      //   autocomplete = new google.maps.places.Autocomplete(
      //       /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      //       {types: ['geocode']});
      //   autocomplete.addListener('place_changed', fillInAddress);
      // }



        $scope.initAutocomplete = function(){
             autocomplete = new google.maps.places.Autocomplete(
             /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
             {types: ['geocode']});
             autocomplete.addListener('place_changed', fillInAddress);

        //     // $scope.initAutocomplete()
         }


      //getting info from autocomplete
      $scope. fillInAddress = function() {

        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          //code from https://google-developers.appspot.com/maps/documentation/javascript/examples/full/places-autocomplete-addressform
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;

            console.log(place.geometry.location.lat(), 'lat', place.geometry.location.lng(), 'long')
            console.log(val, 'val')
          }
        }
      }




    });