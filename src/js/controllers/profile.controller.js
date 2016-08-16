import $ from "jquery"

function ProfileController (ProfileService, $stateParams) {
	let vm = this
	vm.foo = foo;
	vm.results = false;
	
	function init () {
		ProfileService.getProfile($stateParams.username).then(function (res){
			vm.userData = res.data;
		});
		ProfileService.getRepos($stateParams.username).then(function (res) {
			vm.userRepos = res.data;
		});
	}

	function foo (query) {
		ProfileService.getUsersRepos(query, $stateParams.username).then(function (res) {
			vm.filteredUserRepos = res.data.items;
			if (vm.filteredUserRepos.length > 0){
				vm.results = true;
			}
		})
	}

	init();
}

ProfileController.$inject = ['ProfileService', '$stateParams'];
export { ProfileController };