import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Train } from './train';

@Injectable()
export class TrainService {

	private apiUrl = 'api/trains';  // URL to web api

	constructor(private http: Http) { }

	getTrains(): Promise<Train[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Train[])
	             .catch(this.handleError);
	}

	getTrain(id: number): Promise<Train> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json().data as Train)
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}