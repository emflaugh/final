var app = angular.module('myApp');

app.config(function($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'loginCtrl',
    templateUrl: 'login.html'
  })
  .when('/profile', {
    controller: 'profileCtrl',
    templateUrl: 'profile.html'
  })
  .otherwise({ redirectTo:'/login'})


//closure for app.config
});
