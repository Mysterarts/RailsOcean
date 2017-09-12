import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/toPromise';

import { StationResource } from './stationResource';

@Injectable()
export class StationResourceService {

	private apiUrl: string;

	constructor(private http: Http, private configService: ConfigService) { 
		this.apiUrl = configService.apiUrl+"stationResources";
	}

	getAll(): Promise<StationResource[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().stationResources as StationResource[])
	             .catch(this.handleError);
	}

	getAllbyStationId(id: number): Promise<any[]> {
	  const url = `${this.apiUrl}?filter=idStation,eq,${id}&transform=1`; 
	  return this.http.get(url)
	             .toPromise()
	             .then((response) => {
	             	return response.json().stationResources as StationResource[];
	             })
	             .catch(this.handleError);
	}

	getById(id: number): Promise<StationResource> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	//console.log(response);
	    		   	return response.json() as StationResource})
	    		   .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}