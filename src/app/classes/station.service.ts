import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Station } from './station';

@Injectable()
export class StationService {

	private apiUrl = 'http://rails.mysterarts.com/api.php/stations';  // URL to web api

	constructor(private http: Http) 
	{ }

	getAll(): Promise<Station[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().stations as Station[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Station> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   		//TODO fix error (and apply it for other resources)
	    		   		/*
		    		   	if(response.json() == 0){
		    		   		console.warn("DATA ERROR: the station with id: "+id+" doesn't exist");
		    		   	}
		    		   	*/
		    		   	return response.json() as Station
	    		   	})
	    		   .catch(this.handleError);
	}

	/*
	getStationById(id: number): Promise<Station> {
		let station = new Station(this, this.stationResourceService, this.sectionService);
		return station.populate(id).then((promise) => {
			return station;
		});
	}
    */

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}