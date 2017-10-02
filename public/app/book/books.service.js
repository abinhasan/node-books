(function () {
    'use strict';
    angular
        .module('app')
        .factory('booksservice', booksservice);

    booksservice.$inject = ['$http','ngAuthSettings'];


    function booksservice($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        return {
            getBooks: getBooks,
            getCategories: getCategories
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

        function getCategories() {
            return $http.get(serviceBase + 'api/genres')
                .then(getCategoriesComplete)
                .catch(getCategoriesFailed);

            function getCategoriesComplete(response) {
                return response.data;
            }

            function getCategoriesFailed(error) {
                //logger.error('XHR Failed for getAvengers.' + error.data);
            }
        };
    }
} ());