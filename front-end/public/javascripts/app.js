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
            // .when('/', {
            //     templateUrl: 'ngViews/home.html',
            //     controller: 'PostsCtrl'
            // })
            .when('/create', {
                templateUrl: 'ngViews/create.html',
                controller: 'CreatePostCtrl'
            })
            .when('/comments', {
                templateUrl: 'ngViews/comments.html',
                controller: 'CommentsCtrl'
            });
            // .when('/admin', {
            //     templateUrl: 'ngViews/admin.html',
            //     controller: 'DeletePostCtrl'
            // });

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);