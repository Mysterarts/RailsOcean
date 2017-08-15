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

	populate(id: number): Promise<any[]> {

		return this.services.playerService.getById(id)
			.then((player) => {
	      		Object.keys(player).forEach((key) => {
		        	this[key] = player[key];
		    	});
	      	
	    		this.trains = new Array;
	    		let promises = new Array;

	    		this.idTrains.forEach((id) => {
	    			let train = new Train(this.services);

	    			let promise = new Promise((resolve, reject) => {

			    		train.populate(id).then((p) => {
			    			resolve(train);
			    		});
			    		this.trains.push(train);

			    	});

			    	promises.push(promise);
		    	});

		    	return Promise.all(promises);
	      	});
	}

}
