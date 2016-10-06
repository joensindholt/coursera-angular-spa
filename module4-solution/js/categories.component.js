(function () {
  'use strict';

  angular.module('data')
    .component('categories', {
      templateUrl: 'categories.html',
      bindings: {
        categories: '<'
      }
    });
  
})();