import { Injectable, EventEmitter }    from '@angular/core';

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
  	//dataReadyEvent: EventEmitter<Player>;
  	dataReady:boolean = false;

	constructor(private playerService: PlayerService, private trainService: TrainService, private wagonService: WagonService, private resourceService: ResourceService) {
		//this.dataReadyEvent = new EventEmitter();

		this.services = {playerService, trainService, wagonService, resourceService};

		//this.refreshData();
	}

	refreshData(): Promise<void>{

		//Populate resources
		return this.resourceService.getAll().then((promise) => {
			this.resources = promise;

			//Populuate player (with train and wagons)
			this.player = new Player(this.services);
			return this.player.populate(this.playerId).then((promise) => {
				console.log(this.player);
				this.dataReady = true;
				//this.dataReadyEvent.emit(this.player);
			});
		});
	}

	isDataReady(): Promise<void>{
		if(!this.dataReady)
		{
			//console.log("data to fetch")
			return this.refreshData();
		}else{
			//console.log("data already fetched");
			return Promise.resolve();
		}
	}
}