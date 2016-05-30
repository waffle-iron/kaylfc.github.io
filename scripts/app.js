var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })

        // nested list with custom controller
        .state('home.linkedin', {
            url: '/linkedin',
            templateUrl: 'linkedin.html'
        })

        // nested list with just some random string data
        .state('home.flickr', {
            url: '/flickr',
            templateUrl: 'flickr.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'public@about': { 
                    templateUrl: 'public.html'
                },

                // for column two, we'll define a separate controller 
                'private@about': { 
                    templateUrl: 'private.html'
                }
            }
        });
});