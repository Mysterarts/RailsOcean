import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';

export class Resource {
	id: number;
	name: string;
	type: string;
	value: number;
	risks: number[];

	constructor(private services: GameServices) {
		
	}

	populate(id: number): Promise<void>  {

		return this.services.resourceService.getById(id).then((resource) => {
      		Object.keys(resource).forEach((key) => {
	        	this[key] = resource[key];
	    	});
      	});
	}

}
