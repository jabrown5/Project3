angular.module('pottyCheck')
    .controller('RegisterCtrl', function ($scope, $http, $location, $rootScope) {
        // $scope.messages = [
        //     'Please fill out all fields to register',
        //     'Thanks. You have successfully registered.'
        // ];
        // $scope.message = $scope.messages[0];

        $scope.goToHome = function() {
            $location.path('/home');
        }

        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/',
                method: 'POST',
                params: {
                    username: username, 
                    email: email, 
                    password: password }
            }).success(function (results) {
                // $scope.message = $scope.message[1];
                console.log(results)
                $rootScope

                // THIS WILL DISPLAY MESSAGE FROM SERVER SIDE INTO MESSAGE FIELD IN HTML WHEN 
                // 1) USER ENTERS A USERNAME THAT HAS ALREADY BEEN TAKEN, 2) THEY'VE SUCCESSFULLY REGISTERED A NEW ACCOUNT
                if (results.message == "An account with that username already exists. Please choose a new username.") {
                    $scope.message = results.message;
                }
                else {
                    $rootScope.api_key = results.api_key;
                    $scope.message = results.message;  // MESSAGE FOR NEW USER. NOT DISPLAYED SINCE WE REDIRECT
                    $scope.goToHome(); // UPON SUCCESSFUL REGISTRATION, REDIRECTS TO HOME PAGE
                }   
            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to register user.');
                console.log(err);
            });
        };
    });