import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Player } from './player';

@Injectable()
export class PlayerService {

	private apiUrl: string;
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http, private configService: ConfigService) { 
		this.apiUrl = configService.apiUrl+"players";
	}

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

	getByLogin(login: string, password: string): Promise<any[]> {
	  const url = `${this.apiUrl}?filter[]=name,eq,${login}&filter[]=password,eq,${password}&transform=1`;
	  return this.http.get(url)
	             .toPromise()
	             .then(response => response.json().players as Player[])
	             .catch(this.handleError);
	}

	update(player: Player): Promise<Player> {
	    const url = `${this.apiUrl}/${player.id}`;
	    return this.http
	      .put(url, JSON.stringify(player), {headers: this.headers})
	      .toPromise()
	      .then(() => player)
	      .catch(this.handleError);
	}
    

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}
}