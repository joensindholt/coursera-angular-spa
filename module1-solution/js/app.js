(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.lunchMenu = '';
        $scope.message = '';
        
        $scope.checkLunch = function () {
            if ($scope.lunchMenu.trim() === '') {
                $scope.message = 'Please enter data first';
                return;
            } 

            var numberOfItems = $scope.lunchMenu.split(',').length;  

            if (numberOfItems <= 3) {
                $scope.message = 'Enjoy!';
            }
            else if (numberOfItems > 3) {
                $scope.message = 'Too much!';
            }
        }
    }
})();