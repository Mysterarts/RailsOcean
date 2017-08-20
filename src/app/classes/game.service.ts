import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { TrainService } from './train.service';
import { WagonService } from './wagon.service';
import { ResourceService } from './resource.service';
import { StationService } from './station.service';
import { GameServices } from './game.services';
import { Player } from './player';
import { Resource } from './resource';
import { Station } from './station';

@Injectable()
export class GameService {
	playerId = 0;
	trainIndex = 0;
	player: Player;
	resources: Resource[];
	station: Station;
  	services: GameServices;
  	dataReady:boolean = false;
  	dataLoading: boolean = false;

	constructor(private playerService: PlayerService, private trainService: TrainService, private wagonService: WagonService, private resourceService: ResourceService, private stationService: StationService) {

		this.services = {playerService, trainService, wagonService, resourceService};

	}

	refreshData(): Promise<void>{

		//Populate resources
		return this.resourceService.getAll().then((promise) => {
			this.resources = promise;

			//Populuate player (with train and wagons)
			this.player = new Player(this.services);
			return this.player.populate(this.playerId).then((promise) => {
				console.log(this.player);

				this.station = new Station(this.stationService);
				return this.station.populate(this.player.trains[this.trainIndex].idStation).then((promise) => {
					this.dataReady = true;
					this.dataLoading = false;
					//this.dataReadyEvent.emit(this.player);
				});
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

