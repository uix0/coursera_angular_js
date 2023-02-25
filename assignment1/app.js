(function (){
    "use strict";
    angular.module("appOne",[])
        .controller("lunchController",lunchController);

    lunchController.$inject = ["$scope"];
    function lunchController($scope){
        $scope.resultMessage = "";
        $scope.check = function(){
            let n = 0;
            let s = $scope.menu.split(",");
            for(let i = 0; i < s.length; i++) if(s[i].length > 0) n++;
            $scope.resultMessage = (n > 3 ? "Too much!" : "Enjoy!");
        };
    }
})();