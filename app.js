(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });
    var gems = [
      {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Gem 1',
        canPurchase: true,
        soldOut: false,
      },
      {
        name: 'Pentagon Gem',
        price: 4.95,
        description: 'Gem 2',
        canPurchase: true,
        soldOut: false,
      },
    ];
})();