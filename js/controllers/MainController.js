angular.module('appModule',[])
.controller('AppCtrlUser', AppCtrlUser) 
.directive('helloDirective',helloDirective);

function AppCtrlUser($scope){
$scope.name = "Rizki Adrian";
$scope.job = "Banker";
$scope.skills = ["Laravel","angular"];
$scope.rename = function (newName){
	$scope.name = newName;
};
$scope.playerOne = {
	displayName : "Rizki",
	level : "48"
};
$scope.playerTwo = {
	displayName : "Gemo",
	level : "248"
};
}

function helloDirective(){
	return {
		restriction : 'E',
		scope : {
			selectscope: '='
		},
		template: 'Name : <span ng-bind = "selectscope.displayName">{{selectscope.displayName</span></br>LEVEL :<span ng-bind = "selectscope.level">{{player.level}}</span>'
	};
}
	