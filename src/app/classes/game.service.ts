import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { TrainService } from './train.service';
import { WagonService } from './wagon.service';
import { ResourceService } from './resource.service';
import { GameServices } from './game.services';
import { Player } from './player';
import { Resource } from './resource';

@Injectable()
export class GameService {
	playerId = 0;
	player: Player;
	resources: Resource[];
  	services: GameServices;
  	dataReady:boolean = false;
  	dataLoading: boolean = false;

	constructor(private playerService: PlayerService, private trainService: TrainService, private wagonService: WagonService, private resourceService: ResourceService) {

		this.services = {playerService, trainService, wagonService, resourceService};

	}

	refreshData(): Promise<void>{

		console.log("data to fetch");

		//Populate resources
		return this.resourceService.getAll().then((promise) => {
			this.resources = promise;

			//Populuate player (with train and wagons)
			this.player = new Player(this.services);
			return this.player.populate(this.playerId).then((promise) => {
				console.log(this.player);
				this.dataReady = true;
				this.dataLoading = false;
				//this.dataReadyEvent.emit(this.player);
			});
		});
	}

	isDataReady(): Promise<void | {}>{
		if(!this.dataReady)
		{
			if(!this.dataLoading){	
				this.dataLoading = true;
				return this.refreshData();
			}else{
				return new Promise((resolve, reject) => {
					this.waitForDataReady(resolve, reject);
				});
			}
		}else{
			//console.log("data already fetched");
			return Promise.resolve();
		}
	}

	waitForDataReady(resolve, reject) {
		setTimeout(() => {
	            if(!this.dataLoading){	
	            	//console.log("stop");
	            	resolve();
	            }else{
	            	//console.log("continue");
	            	this.waitForDataReady(resolve, reject);
	            }
	        }
	    ,500);
	}
}

