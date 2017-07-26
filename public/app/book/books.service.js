(function () {
    'use strict';
    angular
        .module('app')
        .factory('booksservice', booksservice);

    booksservice.$inject = ['$http'];

   // var serviceBase = ngAuthSettings.apiServiceBaseUri;

    function booksservice($http) {
        return {
            getBooks: getBooks
        };

        function getBooks() {
            return $http.get('http://localhost:8080/api/books')
                .then(getBooksComplete)
                .catch(getBooksFailed);

            function getBooksComplete(response) {
                return response.data.results;
            }

            function getBooksFailed(error) {
                //logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
} ());