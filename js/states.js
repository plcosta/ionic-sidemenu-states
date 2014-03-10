angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $routeProvider) {
  
  $stateProvider

    // Entry State - First VIew 
    .state('entry', {
      url: '/',
      templateUrl: 'templates/entry.html',
      controller: 'EntryController'
    }).

    // Main State
    state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'templates/main-container.html',
      controller: 'MainController'
    }).

    // Home (nested state)
    state('main.home', {
      url: '/home',
      views: {
        'main@': {
          templateUrl: 'templates/main.html',
        },
        'restaurants@': {
          templateUrl: 'templates/restaurants.html',
          controller: 'RestaurantsController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');    

});
