(function () {
    'use strict';
    angular
        .module('app')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['booksservice'];

    function BooksController(booksservice) {
        var vm = this;
        vm.books = [];
        vm.categories = [];

        activateBooks();
        activateCategories();

        function activateCategories() {
            return getCategories().then(function (data) {
                vm.categories = data;
            });
        }

        function activateBooks() {
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

        function getCategories() {
            return booksservice.getCategories()
                .then(function (data) {
                    return data;
                });
        }
    }

} ());

