var app=angular.module("app",[]);
app.controller("functrl",function($scope){
$scope.names=[{"Name":"A",Address:"B","Id":1},{"Name":"A","Address":"B","Id":2},{"Name":"A","Address":"B","Id":3},{"Name":"A","Address":"B","Id":4}];
$scope.GetEmployeee= function(t){
alert("Id is:" + t);
}
});
