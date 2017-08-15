import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';

export class Wagon {
	id: number;
	name: string;
	type: string;

	//Train properties
	power: number = 0;
	wagonsMax: number = 0;
	capacity: number = 0;

	constructor(private services: GameServices, private content) {
		
	}

	populate(id: number): Promise<void>  {

		return this.services.wagonService.getDataById(id).then((wagon) => {
      		Object.keys(wagon).forEach((key) => {
	        	this[key] = wagon[key];
	    	});
      	});
	}

}
