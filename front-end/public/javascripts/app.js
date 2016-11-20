console.log('THE POTTYCHECK PAGE IS LOADED!');


angular.module('pottyCheck', [
    'ngRoute'
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
                templateUrl: 'ngViews/admin.html',
                controller: 'AdminCtrl'
            })
            .when('/home', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/create', {
                templateUrl: 'ngViews/create.html',
                controller: 'CreatePostCtrl'
            })
            .when('/comments', {
                templateUrl: 'ngViews/comments.html',
                controller: 'CommentsCtrl'
            })
             .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'AdminCtrl'
            })
            //    .when('/login', {
            //     templateUrl: 'ngViews/login.html',
            //     controller: 'AdminCtrl'
            // })
              .when('/find', {
                templateUrl: 'ngViews/find.html',
                controller: 'FindCtrl'
            });
          

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);