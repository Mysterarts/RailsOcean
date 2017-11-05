import { Injectable }    from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { TrainService } from './train.service';
import { WagonService } from './wagon.service';
import { ResourceService } from './resource.service';
import { StationService } from './station.service';
import { StationResourceService } from './stationResource.service';
import { SectionService } from './section.service';
import { GameServices } from './game.services';
import { Player } from './player';
import { Resource } from './resource';
import { Station } from './station';
import { Section } from './section';

@Injectable()
export class GameService {
	playerId = -1;
	trainIndex = 0;
	player: Player;
	resources: Resource[];
	station: Station;
  	services: GameServices;
  	dataReady:boolean = false;
  	dataLoading: boolean = false;

  	public connexionFormRequired: boolean = false;
  	public menuReady: boolean = false;

	constructor(
		private playerService: PlayerService, 
		private trainService: TrainService, 
		private wagonService: WagonService, 
		private resourceService: ResourceService, 
		private stationService: StationService, 
		private stationResourceService: StationResourceService, 
		private sectionService: SectionService,
		private storage: Storage,
		private toastCtrl: ToastController) {

		this.services = {playerService, trainService, wagonService, resourceService};
	}

	refreshData(): Promise<void>{

		//Populate resources
		return this.resourceService.getAll().then((promise) => {
			this.resources = promise;
			//console.log(this.resources);

			//Populuate player (with train and wagons)
			this.player = new Player(this.services);
			return this.player.populate(this.playerId).then((promise) => {
				console.log(this.player);
				//this.updateStatus(0);

				this.station = new Station(this.stationService, this.stationResourceService, this.sectionService);
				return this.station.populate(this.player.trains[this.trainIndex].idStation).then((promise) => {
					//console.log(this.station.resourcesSell);
					this.updateStatus(0);
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
			console.log("data already fetched");
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

	getStationById(id: number): Promise<Station>{
		let station = new Station(this.stationService, this.stationResourceService, this.sectionService);
		return station.populate(id).then((promise) =>{
			return station;
		});
	}

	goToStation(station: Station, section: Section){
		let duration = section.distance * 1000000 / this.player.trains[this.trainIndex].power;
		if(this.player.cheatSpeed){
			duration /= 100;
		}

		//TODO fix the counter display
		this.station = station;
		this.player.trains[this.trainIndex].idStation = station.id;
		this.player.trains[this.trainIndex].startTime = (new Date()).valueOf();
		this.player.trains[this.trainIndex].arrivalTime = (new Date()).valueOf() + duration;
		this.player.trains[this.trainIndex].isMovingDuringSession = true;
		this.updateStatus(0);
		this.trainService.update(this.player.trains[this.trainIndex]);
	}

	updateStatus(delay: number) {
		//console.log(this.player.trains[this.trainIndex].arrivalTime+" "+(new Date()).valueOf());

		setTimeout(() => {
            if(this.player.trains[this.trainIndex].arrivalTime <= (new Date()).valueOf()){	
            	this.player.trains[this.trainIndex].isMoving = false;
            	//console.log("stop moving");
            	//TODO Toast?
            	if(this.player.trains[this.trainIndex].isMovingDuringSession){
				    this.toast('Your train arrived in '+this.station.name);
				}
            }else{
            	this.player.trains[this.trainIndex].isMoving = true;
            	this.player.trains[this.trainIndex].timeOfArrival = this.player.trains[this.trainIndex].arrivalTime - (new Date()).valueOf();
				//console.log(this.player.trains[this.trainIndex].timeOfArrival);
            	//console.log("continue moving");
            	this.updateStatus(1000);
            }
        }
	    ,delay);
	}

	connexion(login:string, password:string): Promise<number>{
		return this.playerService.getByLogin(login, password).then((players) => {
			if(players.length > 0){
				//this.player = players[0];
				this.playerId = players[0].id;
				this.storage.set('idPlayer', this.playerId);

				this.dataReady = false;

				return this.isDataReady().then((promise) => {
					this.menuReady = true;
					return 1;
				});
			}else{
				return 0;
			}
		});
	}

	setIdPlayer(id:number): Promise<number>{
		this.playerId = id;
		this.dataReady = false;

		return this.isDataReady().then((promise) => {
			this.menuReady = true;
			return 1;
		});
	}

	updatePlayer(): Promise<number>{
		return this.playerService.update(this.player).then((player) => {
			return 1;
		});
	}

	toast(txt:string){
		let toast = this.toastCtrl.create({
	     	message: txt,
	     	duration: 3000,
 				position: 'top'
	    });
	    toast.present();
	}
}

