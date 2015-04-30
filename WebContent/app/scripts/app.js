var routeApp = angular.module('routeApp',['ngRoute']);  
routeApp.config(['$routeProvider',function ($routeProvider) {  
    $routeProvider  
        .when('/list', {  
            templateUrl: 'views/route/list.html',  
            controller: 'RouteListCtl'  
        })  
        .when('/list/:id', {  
            templateUrl: 'views/route/detail.html',  
            controller: 'RouteDetailCtl'  
        })  
        .otherwise({  
            redirectTo: '/list'  
        });  
}]).controller('RouteListCtl',function($scope) {  
}).controller('RouteDetailCtl',function($scope, $routeParams) {  
    $scope.id = $routeParams.id;  
});  