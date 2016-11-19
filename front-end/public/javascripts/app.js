console.log('THE PAGE IS LOADED!');


angular.module('potty', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'ngViews/login.html',
        controller: 'LoginCtrl'
      })

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);