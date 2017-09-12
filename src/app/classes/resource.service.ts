import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/toPromise';

import { Resource } from './resource';

@Injectable()
export class ResourceService {

	private apiUrl: string;

	constructor(private http: Http, private configService: ConfigService) { 
		this.apiUrl = configService.apiUrl+"resourcesData";
	}

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