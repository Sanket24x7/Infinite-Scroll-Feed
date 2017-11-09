var app = angular.module("infinitescroll", []);
app.controller("appController", function($scope, $document, $window){

    var feed = function(hashtag, query, username, time){
      this.hastag = hashtag;
      this.query = query;
      this.username = username;
      this.time = time;
    }
    $scope.numberOfItems = 3;
    var tempFeeds = [];
    $scope.allFeeds = [];
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
    

    $scope.showMore = function(e){
        console.log(e);
        e.target.parentElement.style.height = "auto";
        e.target.previousElementSibling.style.display = "block";
        e.target.style.display = "none";
    }

    $document.on('scroll', function() {
        // do your things like logging the Y-axis
        console.log($window.scrollY);
        console.log($window.pageYOffset);
        console.log(window.innerHeight);
        console.log("Window HERE");
        console.log($document.scrollY);
        $scope.scrollY = $window.scrollY;
        // or pass this to the scope

        if($document[0].body.scrollHeight <= ($window.pageYOffset + window.innerHeight)){
            loadMoreElements($scope.numberOfItems);
        }
    });

    var loadMoreElements = function(count){
        for(var i = 1; i<=count; i++){
            if($scope.allFeeds.length < tempFeeds.length){
                $scope.allFeeds.push(tempFeeds[$scope.allFeeds.length]);
                if(!$scope.$$phase){
                    $scope.$apply();
                }
            }
        }
    }
    loadMoreElements(3);

});
