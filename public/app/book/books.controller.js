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
            return getBooks().then(function (data) {
                vm.books = data;
            });
        }

        function getBooks() {
            return booksservice.getBooks()
                .then(function (data) {
                    //vm.books = data;
                    return data;
                });
        }
    }

} ());

