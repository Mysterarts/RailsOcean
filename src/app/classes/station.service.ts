import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Station } from './station';

@Injectable()
export class StationService {

	private apiUrl = 'api/stations';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Station[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Station[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Station> {
		const url = `${this.apiUrl}/?id=${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	//console.log(response);
	    		   	return response.json().data[0] as Station})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}