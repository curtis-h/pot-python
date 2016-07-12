/**
 * setup the base module and the routes
 */
var app = angular.module("potatoApp", ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'templates/posts'
    })
    .when('/post/:postid', {
        controller:  'postController',
        templateUrl: 'templates/post'
    })
    .otherwise({
        template: 'Not found'
    });
}]);