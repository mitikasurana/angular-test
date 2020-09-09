(function (){
    "use strict";
    angular.module("myFirstApp", [])

    .controller("MyFirstController", ["$scope", "$filter", function($scope, $filter){
        $scope.name = "Mitika";
        $scope.totalValue = 0;
        $scope.sayHello = function() {
            return "Welcome to the App, "+$scope.name +"!";
        };
        $scope.keyUp = function() {
            $scope.totalValue = calculateValue($scope.name);
        };
        function calculateValue(string){
            var value = 0;
            for (var i =0; i<string.length ; i++) {
                value+=string.charCodeAt(i);
            }
            return value;
        };
        $scope.upper = function() {
            var upCase = $filter("uppercase");
            $scope.name = upCase($scope.name);
    };
    }]);
})();     