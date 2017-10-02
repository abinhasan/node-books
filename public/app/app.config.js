(function () {
    'use strict';
    
    //var serviceBase = 'http://localhost:8080/';

    var serviceBase = 'https://csebooks.herokuapp.com/';

    angular
        .module('app')
        .constant('ngAuthSettings', {
            apiServiceBaseUri: serviceBase
        });

})();