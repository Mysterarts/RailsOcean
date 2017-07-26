import 'rxjs/add/operator/toPromise';

import { TrainService } from './train.service';
import { Wagon } from './wagon';

export class Train {
	id: number;
	name: string;
	idWagons: number[];
	power: number;
	wagonsMax: number;
  	wagons: Wagon[];

	constructor(private trainService: TrainService) {
		
	}

	populate(id: number): void {

		this.trainService.getById(id).then((train) => {
      		Object.keys(train).forEach((key) => {
	        	this[key] = train[key];
	    	});

	    	/*

    		this.idWagons.forEach((id) => {
				let wagon: Wagon;
	    		wagon.populate(id);
	    		this.wagons.push(wagon);
	    	});

			*/
      	})
	}

}
