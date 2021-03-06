'use strict';

describe('sparkleApp.places module', function() {

  describe('place view controller', function(){
    var scope, placeListCtrl, $httpBackend;

    var result = {
      places: [
        {
          'id': 1,
          'name': 'Barista'
          // 'type': 'Coffee Shops',
          // 'snippet': 'Best latte in town!'
        },
        {
          'id': 2,
          'name': 'Coava'
          // 'type': 'Coffee Shops',
          // 'snippet': 'Best espresso flavor'
        },
        {
          'id': 3,
          'name': 'Salt and Straw'
          // 'type': 'Sweet Treats',
          // 'snippet': 'Amazing ice cream'
        }]
    };

    beforeEach(module('sparkleApp.places'));
    beforeEach(module('placeServices'));
    beforeEach(module('ngLodash'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/places').
          respond(result);
      scope = $rootScope.$new();
      placeListCtrl = $controller('PlaceListCtrl', {$scope: scope, $routeParams: {}});
    }));

    it('should create a place list controller', function() {
      expect(placeListCtrl).to.not.be.undefined;
    });

    //TODO fix this broken test due to route param stuff
    // it('should create a places model with 3 places', function() {
    //   expect(scope.places).not.toBeDefined();
    //   $httpBackend.flush();
    //   expect(scope.places).toEqualData(result.places);
    //   expect(scope.places.length).toBe(3);
    // });
  });
});
