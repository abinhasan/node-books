(function () {
	'use strict';
	angular
		.module('app')
		.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

			$locationProvider.html5Mode(true);
			$urlMatcherFactoryProvider.caseInsensitive(true);
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/book/books.html',
					controller: 'BooksController',
					controllerAs: 'vm'
				});


		});
})();