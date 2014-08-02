
function ZombieTestController($scope) {
    $scope.username = '';
    $scope.statusMessage = "";
    this.onLoginUser = function(){
        console.log('onLoginUser');
        // console.log( $scope.username + ':' + $scope.password);
         if (($scope.username != 'test') && ($scope.password != 'test')) {
            $scope.statusMessage = 'Invalid username or password. Please try again.'
         } else {
            $scope.statusMessage = 'Welcome Back User!'
         }
    }

    $scope.$watch('username', function(){
       // console.log('username changed to ' + $scope.username);
     })

   // $scope.$watch(
   //     angular.bind(this, function(){
   //         return $scope.username;
   //     }), function(newVal, oldVal) {
   //         //
   //         // console.log('$scope.username value: ' + $scope.username);
   // });

}

TestLoginComponent = function() {
    return {
        restrict: 'AC',
        link: function($scope, el, attr) {
            console.log('::TestLoginComponent linked ::');
        }

    }
}


angular.module('testApp',['ui.router'])
.config(function($stateProvider){
    $stateProvider
    .state('home', {
        url:'',
        templateUrl:'./partials/home.html'
    })
    .state('login', {
        url:'/login',
        controller: 'testAppCtrl',
        controllerAs: 'testController',
        templateUrl:'./partials/login.html'
     })
    .state('about', {
        url:'/about',
        templateUrl:'./partials/about.html'
     })

})
.controller('testAppCtrl', ZombieTestController)
.directive('testLogin', TestLoginComponent);
