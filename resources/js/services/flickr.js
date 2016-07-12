/**
 * handle all dealings with the flickr api
 */
app.service('FlickrService', ['$http', '$filter', function($http, $filter) {
    // api url
    var url = '/flickr?callback=JSON_CALLBACK';
    
    /**
     * make the data fit our needs
     */
    var transformPosts = function(data) {
        var item = {
            author:      data.author,
            authorLink:  data.link.split("/").slice(0, -2).join("/"),
            image:       data.media.m,
            link:        data.link,
            published:   $filter('date')(data.published, "d MMM yyyy 'at' H:mm"),
            title:       data.title
        };
        
        console.log(item);
        return item;
    };
    
    /**
     * handle the response object gained from a successful ajax call
     * @return array - an array of flickr posts
     */
   var handleSuccess = function(response) {
       console.log(response);
       return response.data.items.map(transformPosts);
   };

   /*
    * handle a failed request
    * @return array - always return an array
    */
   var handleError = function(response) {
       return [];
   };
    
    /**
     * handle the retrieval of data from flickr
     */
    this.getData = function() {
        return $http.jsonp(url).then(handleSuccess, handleError);
    };
}]);
