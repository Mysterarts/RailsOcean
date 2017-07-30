import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';
import { Train } from './train';

export class Player {
	id: number;
  	name: string;
  	idTrains: number[];
  	trains: Train[];

	constructor(private services: GameServices) {
		
	}

	populate(id: number): Promise<void> {

		return this.services.playerService.getById(id).then((player) => {
      		Object.keys(player).forEach((key) => {
	        	this[key] = player[key];
	    	});

      	
    		this.trains = new Array;
    		this.idTrains.forEach((id) => {
    			let train = new Train(this.services);
	    		train.populate(id);
	    		this.trains.push(train);
	    	});
			
      	});

	}

}
