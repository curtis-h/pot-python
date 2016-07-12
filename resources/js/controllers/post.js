/**
 * deal with the routeparams to show the correct post
 */
app.controller('postController', ['$scope', '$routeParams', 'FlickrService',
  function($scope, $params, Flickr) {
      $scope.item = Flickr.getItem($params.postid);
}]);
