/**
 * the main controller for the site
 * handle getting the items from flickr and showing in the view
 */
app.controller('mainController', ['$scope', 'FlickrService', function($scope, Flickr) {
    // initialise blank array
    $scope.feed = [];

    // get the data from flickr and add to the scope
    Flickr.getData().then(function(data) {
        $scope.feed = data;
    });
}]);
