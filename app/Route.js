import fetch from 'unfetch';

export default class Route {
	constructor(viewId, { defaultUrl = '/' }){
		let vm = this;
		vm.routes = {};
		vm.view = document.querySelector(`#${viewId}`);
		vm.viewId = viewId;
		vm.defaultUrl = defaultUrl;
		
		window.addEventListener('hashchange', vm._router.bind(vm));
		window.addEventListener('load', vm._router.bind(vm));
	}
	
	processTemplate(urlPath, templateSRC){
		this.routes[urlPath] = {
			templateSRC: templateSRC
		};
	}
	
	_router(){
		let vm = this;
		let hash = location.hash.slice(1) || '/';
		let currentRoute = vm.defaultUrl;
		let routes = vm.routes;

		if(routes){
			currentRoute = routes[hash];
		}

		fetch(currentRoute.templateSRC)
			.then(resp => {
				resp.text().then(resp => {
					vm.view.innerHTML = resp;
				})
			})
			.catch();
	}
}