console.log('THE POTTYCHECK PAGE IS LOADED!');

angular.module('pottyCheck', [
    'ngRoute', 'uiGmapgoogle-maps'
]).config([
    '$locationProvider',
    '$routeProvider',
    'uiGmapGoogleMapApiProvider',
    // 'uiGmapgoogle-maps', // tet
    function($locationProvider, $routeProvider, uiGmapGoogleMapApiProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        });

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAzS2reqRtaIwjuHg8mJ0frvl0TmdMJ0qk',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/admin.html',
                // controller: 'AdminCtrl' // NEEDS FIXING !!!!!!!!!!!!!!!!!!!!!!!!!!!!
            })
            .when('/home', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/login', {
                templateUrl: 'ngViews/login.html',
                controller: 'LoginCtrl'
            })
            .when('/create', {
                templateUrl: 'ngViews/create.html',
                controller: 'CreatePostCtrl'
            })
            .when('/comments', {
                templateUrl: 'ngViews/comments.html',
                controller: 'CommentsCtrl'
            })
            .when('/find', {
                templateUrl: 'ngViews/find.html',
                controller: 'FindCtrl'
            });
            // .when('/admin', {
            //     templateUrl: 'ngViews/admin.html',
            //     controller: 'DeletePostCtrl'
            // });

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);

