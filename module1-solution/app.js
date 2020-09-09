(function(){
    "use strict";
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope){
        $scope.food = "";
        $scope.result = "";
        $scope.checkItems = function(){
            var list = $scope.food;
            var items = list.split(",");
            console.log(items.length);
            if(list==""){
                $scope.result = "Please enter data first";
                $scope.fontCol = {
                    "color" : "red",
                    "font-weight" : "bold"
                };
                $scope.boxStyle = {
                    "border-color" : "red"
                };
            }
            else if(list!="" && items.length <= 3){
                $scope.result = "Enjoy!"
                $scope.fontCol = {
                    "color" : "green",
                    "font-weight" : "bold"
                };
                $scope.boxStyle = {
                    "border-color" : "green"
                };
            }
            else if(items.length > 3){
                $scope.result = "Too much!"
                $scope.fontCol = {
                    "color" : "red",
                    "font-weight" : "bold"
                };
                $scope.boxStyle = {
                    "border-color" : "red"
                };
            }
        };
    };
})();