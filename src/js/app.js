angular.module("app", ["app.controller", "app.directive", "app.service", "ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("home", {
			url: "/home",
			abstract: true,
			templateUrl: "views/home.html"
		})
		.state("home.angular-bind", {
			url: "/angular-bind",
			templateUrl: "views/angular-bind.html"
		})
	$urlRouterProvider.otherwise("/home/angular-bind")	
})