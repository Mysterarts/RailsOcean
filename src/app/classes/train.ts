import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';
import { Wagon } from './wagon';

export class Train {
	id: number;
	name: string;
	idWagons: number[];
	wagons: Wagon[];
	idLoco: number;

	// Properties from wagons
	power: number = 0;
	wagonsMax: number = 0;
	capacity: number = 0;

	constructor(private services: GameServices) {
		
	}

	populate(id: number): Promise<any[]>  {

		return this.services.trainService.getById(id)
			.then((train) => {

    			Object.keys(train).forEach((key) => {
		        	this[key] = train[key];
		    	});

				this.wagons = new Array;
				let promises = new Array;

	    		this.idWagons.forEach((id) => {
	    			let wagon = new Wagon(this.services);

	    			let promise = new Promise((resolve, reject) => {
			    			wagon.populate(id)
			    			.then((res) => {

				    			this.wagons.push(wagon);

				    			if(wagon.type == "loco"){
					    			this.idLoco = this.wagons.length - 1;
					    			console.log("LocoOk");
					    		}

					    		//Compute train properties based on wagons

					    		this.power += wagon.power;
					    		this.wagonsMax += wagon.wagonsMax;
					    		this.capacity += wagon.capacity;
			    			})
			    			.then((res) => {
			    				resolve(wagon);
			    			})
		    		});

		    		promises.push(promise);
	    		})
	    		
	    		return Promise.all(promises);		
	    	});
	}

}
