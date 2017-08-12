import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Resource } from './resource';

@Injectable()
export class ResourceService {

	private apiUrl = 'api/resources';  // URL to web api

	constructor(private http: Http) { }

	getAll(): Promise<Resource[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Resource[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Resource> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json().data as Resource)
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}