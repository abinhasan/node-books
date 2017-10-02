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
				    controllerAs: 'BooksCtr'

				})
				.state('details', {
				    url: '/ebook/:_id/:_title',
				    templateUrl: 'app/book/book.html',
				    controller: 'BooksController',
				    controllerAs: 'BooksCtr'

				});

			//$stateProvider
			//	.state('home', {
			//	    views: {
			//	        'body': {
			//	            url: '/',
			//	            templateUrl: 'app/book/books.html',
			//	            controller: 'BooksController',
			//	            controllerAs: 'vm'
			//	        }

			//	    }
			//	});


		});
})();