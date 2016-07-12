/**
 * handle all dealings with the flickr api
 */
app.service('FlickrService', ['$http', function($http) {
    // api url
    var url   = '/flickr';
    
    /**
     * handle the response object gained from a successful ajax call
     * @return array - an array of flickr posts
     */
   var handleSuccess = function(response) {
       console.log('success');
       console.log(response);
       return [];
   };

   /*
    * handle a failed request
    * @return array - always return an array
    */
   var handleError = function(response) {
       console.log('fail');
       console.log(response);
       return [];
   };

    
    /**
     * handle the retrieval of data from flickr
     */
    this.getData = function() {
        return $http.get(url).then(handleSuccess, handleError);
    };
}]);
