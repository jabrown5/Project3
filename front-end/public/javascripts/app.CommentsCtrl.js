angular.module('pottyCheck')
    .controller('CommentsCtrl', function ($scope, $http) {
        $scope.messages = [
            'please fill out all fields',
            'thanks for your post. view the blog to see it live'
        ];
        $scope.message = $scope.messages[0];

        $scope.createComment = function(publicly_accessible, cleanliness, family_friendly, gender, pictures, comment, user_submission, date, tags) {
            $http({
                url: 'http://localhost:9292/api/comment',
                method: 'POST',
                params: {
                    publicly_accessible: publicly_accessible, 
                    cleanliness: cleanliness, 
                    family_friendly: family_friendly, 
                    gender: gender, 
                    pictures: pictures, 
                    user_submission: user_submission, 
                    date: date, 
                    tags: tags}
            }).success(function (results) {
                $scope.message = $scope.message[1];
            }).error(function (err) {
                console.log('ajax use go down hole--ERROR');
                console.log(err);
            });
        };

    });


    // angular.module('pottyCheck')
    // .controller('CreatePostCtrl', function ($scope, $http) {
    //     $scope.messages = [
    //         'please fill out all fields',
    //         'thanks for your post. view the blog to see it live'
    //     ];
    //     $scope.message = $scope.messages[0];

    //     $scope.createPost = function(facilityname, address, publiclyaccessible, cleanliness, familyfriendly, gender) {
    //         $http({
    //             url: 'http://localhost:9292/api/restroom',
    //             method: 'POST',
    //             params: {facilityname: facilityname, address: address, publiclyaccessible: publiclyaccessible, cleanliness: cleanliness, familyfriendly: familyfriendly, gender: gender}
    //         }).success(function (results) {
    //             $scope.message = scope.message[1];
    //         }).error(function (err) {
    //             console.log('ajax use go down hole--ERROR');
    //             console.log(err);
    //         });
    //     };

    // });