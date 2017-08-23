import 'rxjs/add/operator/toPromise';

import { StationService } from './station.service';
import { StationResource } from './stationResource';
import { Section } from './section';
import { SectionService } from './section.service';
import { StationResourceService } from './stationResource.service';

export class Station {
	id: number;
  	name: string;
  	//sections: Section[];
  	resources: StationResource[];
  	sections: Section[];

	constructor(private stationService: StationService, private stationResourceService: StationResourceService, private sectionService: SectionService) {
		
	}

	populate(id: number): Promise<void>  {

		return this.stationService.getById(id).then((station) => {
      		Object.keys(station).forEach((key) => {
	        	this[key] = station[key];
	    	});

	    	return this.stationResourceService.getAllbyStationId(id).then((ress) => {
	    		//console.log(ress);
	    		this.resources = ress;

	    		return this.sectionService.getAllFromStationId(id).then((sects) => {
	    			console.log(sects);
	    			this.sections = sects;

	    		});
	    	});

      	});
	}

	/*

	populate(id: number): Promise<any[]> {

		return this.stationService.getById(id)
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
	*/
}
