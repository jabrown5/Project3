angular.module('pottyCheck')
    .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
        // $scope.messages = [
        //     'Please enter your username and password',
        //     'Thanks. You have successfully logged in.'
        // ];
        // $scope.message = $scope.messages[0];

        // $rootScope.retrieved = [];

        $scope.goToHome = function() {
            $location.path('/home');
        }

        $scope.loginAccount = function(username, email, password) {
            $http({
                url: 'http://localhost:9292/api/account/login',
                method: 'post',
                params: {
                    username: username, 
                    password: password,
                }
            }).success(function (results) {
                // if (results.status) {
                if (!results.api_key) {
                    //problem, check for 403
                    $scope.message = results.message; // RENDERS MESSAGE INDICATING INCORRECT LOGIN CREDENTIALS
                } else {
                    $scope.message = results.message;
                    $rootScope.api_key = results.api_key;
                    console.log($rootScope.api_key)
                    $scope.goToHome();

                }
                console.log(results)

                // // THIS WILL DISPLAY MESSAGE FROM SERVER SIDE INTO MESSAGE FIELD IN HTML UPON 
                // // 1) INCORRECT USER PASSWORD ENTERED (IF), 2)  SUCCESSFUL LOGIN (ELSE)
                // if (!results.api_key) {
                //     $scope.message = results.message; // RENDERS MESSAGE INDICATING INCORRECT LOGIN CREDENTIALS
                //     $rootScope.retrieved = results;

                //     // $rootScope.session = {
                //     //         loggedIn: true
                            
                //     //     }
                //     //     console.log($rootScope.session)

                // } else {
                //     // $scope.message = results.message;

                //     // $rootScope.session = object[0];

                //         $rootScope.session = {
                //             loggedIn: true,
                //             api_key: results[0]
                //         }



                //     console.log($rootScope.session)
                //     $scope.goToHome(); // UPON SUCCESSFUL LOGIN, REDIRECTS TO HOME PAGE

                // }


            }).error(function (err) {
                console.log('ERROR -- ERROR -- failed to login user.');
                console.log(err);
                $state.go('login')
            });
        };
    });