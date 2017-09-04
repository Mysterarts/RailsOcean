import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Train } from './train';

@Injectable()
export class TrainService {

	private apiUrl = 'http://rails.mysterarts.com/api.php/trains';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getAll(): Promise<Train[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().trains as Train[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Train> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json() as Train)
	    		   .catch(this.handleError);
	}

	/*
	update(train: Train): Promise<Train> {
	    const url = `${this.apiUrl}/${train.id}`;
	    return this.http
	      .put(url, JSON.stringify(train), {headers: this.headers})
	      .toPromise()
	      .then(() => train)
	      .catch(this.handleError);
	 }
    */

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}