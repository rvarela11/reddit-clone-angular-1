var app = angular.module("myApp", ['ngMessages', 'ngAnimate']);

app.controller('MainController', ['$scope', function($scope) {
  $scope.userForm = {
    id: 0,
    title: "",
    author: "",
    description: "",
    votes: 0,
    comments: []
  };

  $scope.userForm.id = $scope.userForm.id;

  $scope.users = [];
  $scope.rightNow = Date.now();

  $scope.submitForm = function(event) {
    event.preventDefault();
    if ($scope.userForm) {
      $scope.users.push(this.userForm);
      console.log($scope.users);
      $scope.userForm = {
        id: $scope.userForm.id + 1,
        title: "",
        author: "",
        description: "",
        votes: 0,
        comments: []
      };
      $scope.postForm.$setUntouched();
    } else {
      return;
    }
  }

  $scope.userCommentForm = {
    author: "",
    comment: ""
  };

  $scope.submitFormComment = function(event, id) {
    event.preventDefault();
    $scope.users[id].comments.push($scope.userCommentForm);
    $scope.userCommentForm = {
      author: "",
      comment: ""
    };
  }



}]);
