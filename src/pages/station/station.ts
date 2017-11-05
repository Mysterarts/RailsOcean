import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { Station } from '../../app/classes/station';
import { Section } from '../../app/classes/section';

import { WagonsModalPage } from '../modal/wagonsModal';


@Component({
  selector: 'page-station',
  templateUrl: 'station.html'
})
export class StationPage {

	station: Station;
	idCurrentStation: number;
	destStatus: string;
	isMoving: boolean;
	destSection: Section;

  	constructor(
  		public navCtrl: NavController, 
  		private gameService: GameService, 
  		public navParams: NavParams,
  		public modalCtrl: ModalController) {

	  	this.gameService.isDataReady().then((promise) => {
			this.idCurrentStation = this.gameService.station.id;

			this.isMoving = this.gameService.player.trains[this.gameService.trainIndex].isMoving;

			if(navParams.get("idStation") == undefined){	
				this.station = this.gameService.station;
				this.destStatus = "same";

				this.refreshResource();
			}else{
				let idStation = navParams.get("idStation");

				gameService.getStationById(idStation).then((station) => {
					this.station = station;
					this.destStatus = "distant";

					this.refreshResource();

					if(this.station.id == this.idCurrentStation){
						this.destStatus = "same";
					}else{
						station.sections.forEach((section) => {
							if(section.idStation2 == this.idCurrentStation || section.idStation1 == this.idCurrentStation){
								this.destStatus = "ok";
								this.destSection = section;
							}
						});
					}
				});
			}
		});

  	}

  	refreshResource(){
  		this.station.resourcesSell.forEach((res) => {
  			
  			res.quantityOwned = 0;

  			this.gameService.player.trains[this.gameService.trainIndex].wagons.forEach((wagon) => {
	  			if(wagon.content.idResource == res.idResource){
	  				res.quantityOwned += wagon.content.quantity;
	  			}
	  		});
  		});

  		this.station.resourcesBuy.forEach((res) => {
  			
  			res.quantityOwned = 0;

  			this.gameService.player.trains[this.gameService.trainIndex].wagons.forEach((wagon) => {
	  			if(wagon.content.idResource == res.idResource){
	  				res.quantityOwned += wagon.content.quantity;
	  			}
	  		});
  		});
  	}

  	goToStationPage(idStation: number){
  		this.navCtrl.push(StationPage, {
	    	idStation: idStation
	    });
  	}

  	goToStation(){
  		if(this.destStatus == "ok"){
  			this.gameService.goToStation(this.station, this.destSection);
	  		this.navCtrl.push(StationPage);
  		}
  	}

  	openWagonsModal(params) {
  		if(params.res.quantityOwned > 0 || params.type == "buy"){
	    	let modal = this.modalCtrl.create(WagonsModalPage, params);
			modal.onDidDismiss(() => {
		    	this.refreshResource();
		    });
	    	modal.present();
	    }else{
	    	this.gameService.toast("You don't own this resource");
	    }
	}

}
