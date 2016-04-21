// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){
  var app = angular.module('myVideoApp', ['ionic', 'youtube-embed'] );

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

    app.controller('videocontroller', function($scope, $http){
         // $scope.videos = [
         //     {
         //        title: "My first video",
         //        date: "1-1-2015",
         //        thumbnails: "http://i.ytimg.com/vi/bJp1ptX4F3M/maxresdefault.jpg",
         //     }, 
         //    {
         //      title: "My second video",
         //      date: "5-7-2015",
         //      thumbnails: "http://i.ytimg.com/vi/NA2VerbOyt0/maxresdefault.jpg",
         //    }

         // ];       

         $scope.videos = [];

                $scope.youtubeParams = {
                  part: 'id,snippet',
                  playlistId:'PLg_Jr7vZfNvlWoncCb59KNwCuP_YSh7JH',
                  channelId: 'UCJk5iAG6tUhDSF4TtzFQ-JQ',
                  key: 'AIzaSyDZQlfBs7UoLHfzxK0BzjUY2a0EL-8xrv8',
                }

                $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:$scope.youtubeParams}).success(function(response){
                     //console.log(response);
                  angular.forEach(response.items, function(child){
                     console.log (child);
                     //console.log(child.snippet.resourceId.videoId);
                     $scope.videos.push(child);

                   });
                });


           $scope.playerVars = {
                rel: 0,
                showinfo: 0,
                modestbranding: 0,
          }     

    });


}());

