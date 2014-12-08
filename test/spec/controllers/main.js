'use strict';

describe('Controller: MainCtrl', function () {


  var $scope,
    MainCtrl,
    $controller,
    vicSvc,
    mockVictService;

  beforeEach(function() {

    jasmine.getJSONFixtures().fixturesPath='base/test/mock';

    mockVictService = {};

    module('petitionsorgApp', function($provide) {
      $provide.value('victoriesService', mockVictService);
    });

    inject(function($q) {

      mockVictService.data = getJSONFixture('lastVictories.json');

      mockVictService.lasts = function() {
        var defer = $q.defer();

        defer.resolve(this);

        return defer.promise;
      };
    });
  });

    // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, victoriesService, $rootScope) {
    $scope = $rootScope.$new();
    vicSvc = victoriesService;
    $controller = _$controller_;
    MainCtrl = $controller('MainCtrl', { $scope: $scope , victoriesService: vicSvc });
    $scope.$digest();
  }));

  it('Should show the last 5 victories', function() {
    expect($scope.victories.length).toBe(5);
  });
});