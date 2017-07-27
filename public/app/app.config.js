(function () {
    'use strict';
    
    var serviceBase = 'http://localhost:8080/';

    //var serviceBase = 'http://technology.somee.com/';

    //var serviceBase = 'http://abinhasan-001-site1.ctempurl.com/';

    angular
        .module('app')
        .constant('ngAuthSettings', {
            apiServiceBaseUri: serviceBase
        });

})();