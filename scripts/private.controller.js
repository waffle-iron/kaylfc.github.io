angular
    .module('app')
    .controller('privateCtrl', privateCtrl);

function privateCtrl() { 

	var vm = this;
	
	vm.text = 'private stuff goes ere';

	console.log('fad', vm);
}