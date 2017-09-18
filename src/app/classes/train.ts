import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';
import { Wagon } from './wagon';

export class Train {
	id: number;
	name: string;
	idWagons: number[];
	wagons: Wagon[];
	idLoco: number;
	idStation: number;
	startTime: number;
	arrivalTime: number;
	timeOfArrival: number;
	isMoving: boolean = false;
	isMovingDuringSession: boolean = false;

	// Properties from wagons
	power: number = 0;
	wagonsMax: number = 0;
	capacity: number = 0;

	constructor(private services: GameServices) {
		
	}

	populate(id: number): Promise<any[]>  {

		return this.services.trainService.getById(id)
			.then((train) => {

				console.log(train);

    			Object.keys(train).forEach((key) => {
		        	this[key] = train[key];
		    	});

				return this.services.wagonService.getAllbyTrainId(id);
			})
			.then((wagonsContent) => {

				this.wagons = new Array;
				let promises = new Array;

	    		wagonsContent.forEach((wagonContent) => {
	    			let wagon = new Wagon(this.services, wagonContent);

	    			let promise = new Promise((resolve, reject) => {
			    			wagon.populate(wagonContent.idWagon)
			    			.then((res) => {

				    			this.wagons.push(wagon);
				    			//console.log(wagon);

				    			if(wagon.type == "loco"){
					    			this.idLoco = this.wagons.length - 1;
					    		}

					    		//Compute train properties based on wagons

					    		this.power += wagon.power;
					    		this.wagonsMax += wagon.wagonsMax;
					    		this.capacity += wagon.capacity;

					    		resolve(wagon);
			    			});
		    		});

		    		promises.push(promise);
	    		})
	    		
	    		return Promise.all(promises);		
	    	});
	}

}
