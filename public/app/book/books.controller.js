(function () {
    'use strict';
    angular
        .module('app')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['booksservice'];

    function BooksController(booksservice) {
        var vm = this;
        vm.books = [];

        activate();

        function activate() {
            return getBooks().then(function () {
                //logger.info('Activated Avengers View');
            });
        }

        function getBooks() {
            return booksservice.getBooks()
                .then(function (data) {
                    vm.books = data;
                    return vm.books;
                });
        }
    }

} ());

