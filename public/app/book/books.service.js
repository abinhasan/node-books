(function () {
    'use strict';
    angular
        .module('app')
        .factory('booksservice', booksservice);

    booksservice.$inject = ['$http','ngAuthSettings'];


    function booksservice($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        return {
            getBooks: getBooks
        };

        function getBooks() {
            return $http.get(serviceBase + 'api/books')
                .then(getBooksComplete)
                .catch(getBooksFailed);

            function getBooksComplete(response) {
                return response.data;
            }

            function getBooksFailed(error) {
                //logger.error('XHR Failed for getAvengers.' + error.data);
            }
        };
    }
} ());