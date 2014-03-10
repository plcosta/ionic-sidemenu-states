'use strict';

ionic.Platform.ready(function(){
    console.log("Platform is ready!");
});

angular.module('myApp.services', []);
angular.module('myApp.controllers', []);

angular.module('myApp', ['ionic', 'ngRoute', 'myApp.services', 'myApp.controllers']);
