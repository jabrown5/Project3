angular.module('pottyCheck')
    .controller('LoginCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please enter your username and password',
            'Thanks. You have successfully logged in.'
        ];
        $scope.message = $scope.messages[0];

        $scope.loginAccount = function(username, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/',
                method: 'get',
                params: {
                    username: username, 
                    password: password }
            }).success(function (results) {
                $scope.message = $scope.message[1];
                console.log('You have logged in.')
            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to login user.');
                console.log(err);
            });
        };
    });