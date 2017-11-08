var app = angular.module("infinitescroll", []);
app.controller("appController", function($scope){
    $scope.showMore = function(e){
        console.log(e);
        e.target.parentElement.style.height = "auto";
        e.target.previousElementSibling.style.webkitLineClamp = "";
    }
});
