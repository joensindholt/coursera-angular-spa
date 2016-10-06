(function () {
  'use strict';

  angular.module('data')
    .component('items', {
      templateUrl: 'items.html',
      bindings: {
        items: '<'
      }
    });
  
})();