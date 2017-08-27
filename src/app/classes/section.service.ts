import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Section } from './section';

@Injectable()
export class SectionService {

	private apiUrl = 'api/sections';

	constructor(private http: Http) { }

	getAll(): Promise<Section[]> {
	  return this.http.get(this.apiUrl)
	             .toPromise()
	             .then(response => response.json().data as Section[])
	             .catch(this.handleError);
	}

	getAllFromStationId(id: number): Promise<any[]> {
	  const url = `${this.apiUrl}/?from=${id}`;
	  const url2 = `${this.apiUrl}/?to=${id}`;
	  let allSections: Section[];

	  return this.http.get(url)
	             .toPromise()
	             .then((response) => {
	             	allSections = response.json().data as Section[];

	             	return this.http.get(url2)
		             .toPromise()
		             .then((response) => {
		             	return allSections.concat(response.json().data as Section[]);
		             });
	             })
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Section> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json().data as Section)
	    		   .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}