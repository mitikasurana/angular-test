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
            }
            else if(list!="" && items.length <= 3){
                $scope.result = "Enjoy!"
            }
            else if(items.length > 3){
                $scope.result = "Too much!"
            }
        };
    };
})();