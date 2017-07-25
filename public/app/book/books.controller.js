(function () {
    'use strict';
    angular
        .module('app')
        .controller('BooksController', BooksController);

        BooksController.$inject = ['$scope'];

    function BooksController(scope) { }

} ());

