angular.module("app", ["app.controller", "app.directive", "app.service", "ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state("index",{
		url: "/index",
		views: {
			"index":{
			 	template:"views/home.html"
			},
			"angular-bind": {
				template:"views/angular-bind.html"
			}
		}
	})
	$urlRouterProvider.otherwise("index");
})