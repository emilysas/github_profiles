describe('GitUserSearchController', function() {
	beforeEach(module('GitUserSearc'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('GitUserSearchController', {
			$scope: scope
		});
	}));

	it('initialises with an empty search result and term', functin() {
		expect(scope.searchResult).toBeUndefined();
		expect(scope.searchTerm).toBeUndefined();
	});
});