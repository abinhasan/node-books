(function () {
    'use strict';
    angular
        .module('app')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['booksservice'];

    function BooksController(booksservice) {
        var vm = this;
        vm.books = [];


        function getBooks() {
            return booksservice.getBooks()
                .then(function (data) {
                    vm.books = data;
                    return vm.books;
                });
        }
    }

} ());

