(function () {
    'use strict';
    
    var serviceBase = 'http://localhost:8080/';

    //var serviceBase = 'http://csebooks.herokuapp.com/';

    angular
        .module('app')
        .constant('ngAuthSettings', {
            apiServiceBaseUri: serviceBase
        });

})();