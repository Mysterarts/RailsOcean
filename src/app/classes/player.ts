import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { Train } from './train';

export class Player {
	id: number;
  	name: string;
  	idTrains: number[];
  	trains: Train[];

	constructor(private playerService: PlayerService) {
		
	}

	populate(id: number): Promise<void> {

		return this.playerService.getById(id).then((player) => {
      		Object.keys(player).forEach((key) => {
	        	this[key] = player[key];
	    	});

      		/*
    		this.idTrains.forEach((id) => {
    			let train: Train;
	    		train.populate(id);
	    		this.trains.push(train);
	    	});
			*/
			//return true;
      	});

	}

}
