angular
    .module('app')
    .controller('socialCtrl', socialCtrl);

socialCtrl.$inject = ['$stateParams'];

function socialCtrl($stateParams) { 

	var vm = this;
	
	console.log($stateParams);
}