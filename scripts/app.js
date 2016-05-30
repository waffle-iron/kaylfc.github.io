var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // home
        .state('home', {
            url: '/home',
           // templateUrl: 'home.html',
            views: {

                '': { templateUrl: 'home.html' },

                'work@home': { 
                    templateUrl: 'work.html',
                    controller: 'workCtrl',
                    controllerAs: 'work'
                },

                'social@home': { 
                    templateUrl: 'social.html',
                    controller: 'socialCtrl',
                    controllerAs: 'social'
                }
            }
        })

        .state('home.linkedin', {
            url: '/linkedin',
            templateUrl: 'linkedin.html'
        })

        .state('home.flickr', {
            url: '/flickr',
            templateUrl: 'flickr.html'
        })
        
        // about
        .state('about', {
            url: '/about',
            views: {

                '': { templateUrl: 'about.html' },

                'public@about': { 
                    templateUrl: 'public.html'
                },

                'private@about': { 
                    templateUrl: 'private.html'
                }
            }
        });
});