/**
 * the main controller for the site
 * handle getting the items from flickr and showing in the view
 */
app.controller('mainController', ['$scope', '$window', 'FlickrService', function($scope, $window, Flickr) {
    // initialise blank array
    $scope.feed = [];
    // setup and watch the window size to base our title limits
    angular.element($window).bind('load resize', function() {
        $scope.limiter = Math.floor($window.innerWidth / 20);
        $scope.$apply();
    });

    
    // get the data from flickr and add to the scope
    Flickr.getData().then(function(data) {
        $scope.feed = data;
    });
}]);
