var app = angular.module("infinitescroll", []);
app.controller("appController", function($scope){

    var feed = function(hashtag, query, username, time){
      this.hastag = hashtag;
      this.query = query;
      this.username = username;
      this.time = time;
    }
    var tempFeeds = [];
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    tempFeeds.push(new feed("Kung Fu Panda", " Furious Five: Five Animals of KungFu ", "Michael Jackson", "5:30PM"));
    $scope.allFeeds = tempFeeds;

    $scope.showMore = function(e){
        console.log(e);
        e.target.parentElement.style.height = "auto";
        e.target.previousElementSibling.style.display = "block";
        e.target.style.display = "none";
    }
});
