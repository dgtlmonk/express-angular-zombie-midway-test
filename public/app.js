angular.module('testApp',['ui.router'])
.config(function($stateProvider){
    $stateProvider
    .state('home', {
        url:'',
        templateUrl:'./partials/home.html'
    })
    .state('login', {
        url:'/login',
        templateUrl:'./partials/login.html'
    })
})
