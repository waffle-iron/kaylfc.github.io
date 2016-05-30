angular
    .module('app')
    .controller('HomeController', HomeController);

HomeController.$inject = [
	'countries'
];

function HomeController(
	countries) { 

	var vm = this;
	
	vm.area = "World";
	vm.stateChanged = false;
	vm.hovering = false;
	
	var countriesData = countries.get();

	////////////////////////////

	vm.changeArea = function() {
		var rand = Math.floor(Math.random() * countriesData.length);
		var key = Object.keys(countriesData[rand].name.native)[0];

		vm.area = countriesData[rand].name.native[key].common;
		vm.stateChanged = !vm.stateChanged;
	}
}