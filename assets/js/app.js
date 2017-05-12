//var app = angular.module('app', []);

//app.controller('SearchController', function($scope, $http) {
//    $scope.greeting = 'Hola!';
//
//
//
//    $scope.$watch('q', function(newValue, oldValue) {
//        if (newValue != oldValue && newValue != '') {
//            console.log(newValue);
//
//            //$http.get('data/data.json').then(function(response) {
//            //    $scope.greeting = response.data;
//            //}, function() {
//            //    console.log('1');
//            //}).finally(function() {
//            //    console.log('0');
//            //});
//
//            $.ajax({
//                url: 'data/data.json',
//                type: 'GET',
//                success: function(data) {
//                    console.log('success');
//                },
//                error: function(data) {
//                    console.log('error');
//                }
//            })
//        }
//    });
//});

$('#search-form-input').on('input', function(e) {
    var $this = $(this);
    if ($this.val() != '') {
        console.log($this.val());
        $.ajax({
            url: 'https://www.dropbox.com/s/uesem0iq1ob1bh7/data.json',
            type: 'GET',
            dataType: 'jsonp',
            success: function(data) {
                console.log('success');
            },
            error: function(data) {
                console.log('error');
            }
        })
    }
});