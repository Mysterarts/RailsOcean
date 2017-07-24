import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wagon } from './wagon';

@Injectable()
export class WagonService {

	private apiUrl = 'api/wagons';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Wagon[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Wagon[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Wagon> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json().data as Wagon)
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}