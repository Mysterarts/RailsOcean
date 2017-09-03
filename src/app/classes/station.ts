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
  	resourcesSell: StationResource[];
  	resourcesBuy: StationResource[];
  	sections: Section[];

	constructor(private stationService: StationService, private stationResourceService: StationResourceService, private sectionService: SectionService) {
		
	}

	populate(id: number): Promise<any[]>  {

		return this.stationService.getById(id).then((station) => {
      		Object.keys(station).forEach((key) => {
	        	this[key] = station[key];
	    	});

	    	return this.stationResourceService.getAllbyStationId(id).then((ress) => {
	    		//console.log(ress);
	    		this.resourcesSell = new Array();
	    		this.resourcesBuy = new Array();

	    		ress.forEach((res) => {
	    			if(res.type == "sell"){
	    				this.resourcesSell.push(res);
	    			}else{
	    				this.resourcesBuy.push(res);
	    			}
	    		});

	    		return this.sectionService.getAllFromStationId(id).then((sects) => {
	    			//console.log(sects);
	    			this.sections = sects;

	    		}).then((promise) => {
	    			
	    			let promises = new Array;

		    		this.sections.forEach((section) => {

		    			let promise = new Promise((resolve, reject) => {
								let idStationTo = section.idStation1;

			    				if(section.idStation1 == id){
			    					idStationTo = section.idStation2;
			    				}

				    			this.stationService.getById(idStationTo)
				    			.then((toStation) => {

					    			section.toStation = toStation;

						    		resolve(toStation);
				    			});
			    		});

			    		promises.push(promise);
		    		})
		    		
		    		return Promise.all(promises);	
	    		});
	    	});

      	});
	}
}
