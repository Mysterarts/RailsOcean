import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';

export class Wagon {
	id: number;
	name: string;
	type: string;
	quantityToSell: number = 0;

	//Train properties
	power: number = 0;
	wagonsMax: number = 0;
	capacity: number = 0;

	constructor(private services: GameServices, public content) {
		
	}

	populate(id: number): Promise<void>  {

		return this.services.wagonService.getDataById(id).then((wagon) => {
      		Object.keys(wagon).forEach((key) => {
	        	this[key] = wagon[key];
	    	});
      	});
	}

}
