import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/toPromise';

import { Section } from './section';

@Injectable()
export class SectionService {

	private apiUrl: string;

	constructor(private http: Http, private configService: ConfigService) { 
		this.apiUrl = configService.apiUrl+"sections";
	}

	getAll(): Promise<Section[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().sections as Section[])
	             .catch(this.handleError);
	}

	getAllFromStationId(id: number): Promise<any[]> {
	  const url = `${this.apiUrl}?filter=idStation1,eq,${id}&transform=1`;
	  const url2 = `${this.apiUrl}?filter=idStation2,eq,${id}&transform=1`;
	  let allSections: Section[];

	  return this.http.get(url)
	             .toPromise()
	             .then((response) => {
	             	allSections = response.json().sections as Section[];
	             	console.log(allSections);

	             	return this.http.get(url2)
		             .toPromise()
		             .then((response) => {
		             	return allSections.concat(response.json().sections as Section[]);
		             });
	             })
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Section> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json() as Section)
	    		   .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}