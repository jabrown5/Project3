angular.module('pottyCheck')
    .controller('RegisterCtrl', function ($scope, $http) {
        $scope.messages = [
            'Please fill out all fields to register',
            'Thanks. You have successfully registered.'
        ];
        $scope.message = $scope.messages[0];

        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/',
                method: 'POST',
                params: {
                    username: username, 
                    email: email, 
                    password: password }
            }).success(function (results) {
                $scope.message = $scope.message[1];
            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to register user.');
                console.log(err);
            });
        };
    });