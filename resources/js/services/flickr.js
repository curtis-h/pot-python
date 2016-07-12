/**
 * handle all dealings with the flickr api
 */
app.service('FlickrService', ['$http', '$filter', function($http, $filter) {
    // api url
    var url   = '/flickr?callback=JSON_CALLBACK';
    var posts = [];
    
    /**
     * make the data fit our needs
     */
    var transformPosts = function(data) {
        var item = {
            author:      data.author,
            authorLink:  data.link.split("/").slice(0, -2).join("/"),
            description: data.description,
            image:       data.media.m,
            link:        data.link,
            published:   $filter('date')(data.published, "d MMM yyyy 'at' H:mm"),
            tags:        data.tags.split(" "),
            title:       data.title
        };
        
        console.log(item);
        return item;
    };
    
    var mergePosts = function(newPosts) {
        posts = posts.concat(newPosts.map(transformPosts));
        return posts;
    }
    
    /**
     * handle the response object gained from a successful ajax call
     * give the results to be merged into storage
     * @return array - an array of flickr posts
     */
   var handleSuccess = function(response) {
       console.log(response);
       return mergePosts(response.data.items);
   };

   /*
    * handle a failed request, return the already retieved items
    * @return array - always return an array
    */
   var handleError = function(response) {
       return posts;
   };
    
    /**
     * handle the retrieval of data from flickr
     */
    this.getData = function() {
        return $http.jsonp(url).then(handleSuccess, handleError);
    };
    
    /**
     * get a specific item from the data
     */
    this.getItem = function(id) {
        return posts[id];
    };
}]);
