(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', []);

    // ****************************************
    // ShoppingListCheckOffService
    // ****************************************
    ShoppingListCheckOffService.$inject = [];

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemsToBuy = [
            {
                quantity: 10,
                name: 'Bananas'
            }, {
                quantity: 5,
                name: 'Carrots'
            }, {
                quantity: 7,
                name: 'Aubergine'
            }];

        service.boughtItems = [];

        service.markItemAsBought = function (itemIndex) {
            var item = service.itemsToBuy[itemIndex];
            service.itemsToBuy.splice(itemIndex, 1);
            service.boughtItems.push(item);
        }
    }

    // ****************************************
    // ToBuyShoppingController
    // ****************************************
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.itemsToBuy;

        toBuyCtrl.markItemAsBought = function (itemIndex) {
            ShoppingListCheckOffService.markItemAsBought(itemIndex);
        }
    }

    // ****************************************
    // AlreadyBoughtShoppingController
    // ****************************************
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.boughtItems = ShoppingListCheckOffService.boughtItems;
    }
})();