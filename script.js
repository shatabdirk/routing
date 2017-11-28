// Code goes here

(function() {
  angular.module('testExample', [])
    .controller('MyController', ['$scope', function($scope) {
      
      
      $scope.city=''
      
      $scope.empList = [{
        "id": 1,
        "name": 'john',
        "phone": 9999999,
        "address": {
          "city": 'pune',
          "address_line1": 'ABC road',
          "address_line2": 'xyz building',
          "postalCode": 451112
        }
      }, {
        "id": 2,
        "name": 'Jacob',
        "phone": 'AZ99PQ9',
        "address": {
          "city": 'pune',
          "address_line1": 'PQR road',
          "address_line2": 'ABC building',
          "postalCode": 451112
        }
      }, {
        "id": 2,
        "name": 'Ari',
        "phone": 1234566789,
        "address": {
          "city": 'Mumbai',
          "address_line1": 'PQR road',
          "address_line2": 'ABC building',
          "postalCode": 451112
        }
      }];


      $scope.show = show;

      function show(phone) {
        var isShow = false;
        if (typeof(phone) === 'number') {
          isShow = true;
        }
        return isShow;
      }

    }]);
}());