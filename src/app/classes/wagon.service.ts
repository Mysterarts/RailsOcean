import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/toPromise';

import { Wagon } from './wagon';

@Injectable()
export class WagonService {

	private apiUrlData: string;
	private apiUrl: string;

	constructor(private http: Http, private configService: ConfigService) { 
		this.apiUrl = configService.apiUrl+"wagons";
		this.apiUrlData = configService.apiUrl+"wagonsData";
	}

	getAll(): Promise<Wagon[]> {
	  return this.http.get(this.apiUrl+'?transform=1')
	             .toPromise()
	             .then(response => response.json().wagons as Wagon[])
	             .catch(this.handleError);
	}

	getAllbyTrainId(id: number): Promise<any[]> {
	  const url = `${this.apiUrl}?filter=idTrain,eq,${id}&transform=1`;
	  return this.http.get(url)
	             .toPromise()
	             .then(response => response.json().wagons as Wagon[])
	             .catch(this.handleError);
	}

	getById(id: number): Promise<Wagon> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then(response => response.json() as Wagon)
	    		   .catch(this.handleError);
	}

	getDataById(id: number): Promise<Wagon> {
		const url = `${this.apiUrlData}/${id}`;
		return this.http.get(url)
	    		   .toPromise()
	    		   .then((response) => {
	    		   	return response.json() as Wagon
	    		   })
	    		   .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}