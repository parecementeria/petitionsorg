'use strict';

describe('victoriesService', function() {

	// load the controller's module
	beforeEach(module('petitionsorgApp'));

	var victoriesService,
		$httpBackend;

	beforeEach(inject(function (_$httpBackend_, _victoriesService_) {
		$httpBackend = _$httpBackend_;
		victoriesService = _victoriesService_;
		jasmine.getJSONFixtures().fixturesPath='base/test/mock';
	}));

	afterEach (function () {
		$httpBackend.verifyNoOutstandingExpectation ();
		$httpBackend.verifyNoOutstandingRequest ();
	});

	it('should get 5 victories', function () {
		$httpBackend.expectGET('data/lastVictories.json')
			.respond(getJSONFixture('lastVictories.json'));
		var victoriesPromise = victoriesService.lasts();
		var victories;
		victoriesPromise.then(function(response){
			victories = response;
		});
		$httpBackend.flush();
		expect(victories.data.length).toBe(5);
	});
});
