import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Player } from './player';

@Injectable()
export class PlayerService {

	private apiUrl = 'http://rails.mysterarts.com/api.php/players';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Player[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().players as Player[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Player> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	//console.log(response.json());
	    		   	return response.json() as Player})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}