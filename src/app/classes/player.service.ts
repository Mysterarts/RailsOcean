import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService {

	private apiUrl = 'api/players';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Player[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Player[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Player> {
		const url = `${this.apiUrl}/?id=${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	//console.log(response);
	    		   	return response.json().data[0] as Player})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}