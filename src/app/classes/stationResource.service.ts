import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StationResource } from './stationResource';

@Injectable()
export class StationResourceService {

	private apiUrl = 'api/stationResources';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<StationResource[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as StationResource[])
	             .catch(this.handleError);
	}

	getAllbyStationId(id: number): Promise<any[]> {
	  const url = `${this.apiUrl}?idStation=${id}`; 
	  return this.http.get(url)
	             .toPromise()
	             .then((response) => {
	             	return response.json().data as StationResource[];
	             })
	             .catch(this.handleError);
	}

	getById(id: number): Promise<StationResource> {
		const url = `${this.apiUrl}/?id=${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	//console.log(response);
	    		   	return response.json().data[0] as StationResource})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}