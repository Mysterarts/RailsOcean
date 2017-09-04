import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Resource } from './resource';

@Injectable()
export class ResourceService {

	private apiUrl = 'http://rails.mysterarts.com/api.php/resourcesData';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Resource[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then((response) => {
    		   		return response.json().resourcesData as Resource[];
    		   	 })
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Resource> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   		return response.json() as Resource;
	    		   	})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}