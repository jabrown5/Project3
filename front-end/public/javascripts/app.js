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
// <<<<<<< HEAD
                // controller: 'PostsCtrl'
// =======
                // controller: 'AdminCtrl' // NEEDS FIXING !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// >>>>>>> ef03598d0d10750570a85ba22951d3f79b14f9fc
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

            // .when('/', {
            //     templateUrl: 'ngViews/admin.html',
            //     controller: 'AdminCtrl'
            // })

