(function () {
  'use strict';

  console.log('running');

  angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItems);

  // ****************************************
  // MenuSearchService
  // ****************************************
  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (result) {
        return result.data.menu_items;
      });
    }
  }

  // ****************************************
  // NarrowItDownController
  // ****************************************
  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.found = [];
    ctrl.message = null;

    ctrl.getMatchedMenuItems = function (searchTerm) {
      ctrl.found = [];

      // if the user supplied no search term display 'Nothing found'      
      if (!searchTerm) {
        ctrl.message = 'Nothing found';
        return;
      }

      MenuSearchService.getMatchedMenuItems(searchTerm).then(function (items) {
        // Loop though the list of items filtering it using searchTerm 
        for (var i = 0; i < items.length; i++) {
          if (items[i].name.indexOf(searchTerm) !== -1) {
            ctrl.found.push(items[i]);
          }
        }

        // If no items where found show 'Nothing found'
        if (ctrl.found.length === 0) {
          ctrl.message = 'Nothing found';
        }
        else {
          ctrl.message = null;
        }
      });
    }

    ctrl.removeMenuItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    }
  }

  // ****************************************
  // FoundItems
  // ****************************************
  function FoundItems() {
    var ddo = {
      restrict: 'E',
      scope: {
        found: '<',
        onRemove: '&'
      },
      templateUrl: 'found-items-directive.html'
    };

    return ddo;
  }

})();