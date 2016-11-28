
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

        $routeProvider.otherwise({ redirectTo: '/home' });
    }
]);

            // .when('/', {
            //     templateUrl: 'ngViews/admin.html',
            //     controller: 'AdminCtrl'
            // })


