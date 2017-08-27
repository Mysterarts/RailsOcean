import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';
import { Station } from './station';

export class Section {
	id: number;
	from: number;
	to: number;
	distance: number;
	risk: number;
	toStation: Station;

	constructor(private services: GameServices) {
		
	}

	populate(id: number): Promise<void>  {

		return this.services.wagonService.getDataById(id).then((wagon) => {
      		Object.keys(wagon).forEach((key) => {
	        	this[key] = wagon[key];
	    	});
      	});
	}

}
