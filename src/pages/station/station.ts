import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { Station } from '../../app/classes/station';
import { Section } from '../../app/classes/section';


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

  	constructor(public navCtrl: NavController, private gameService: GameService, public navParams: NavParams) {

	  	this.gameService.isDataReady().then((promise) => {
			this.idCurrentStation = this.gameService.station.id;

			this.isMoving = this.gameService.player.trains[this.gameService.trainIndex].isMoving;

			if(navParams.get("idStation") == undefined){	
				this.station = this.gameService.station;
				this.destStatus = "same";
			}else{
				let idStation = navParams.get("idStation");

				gameService.getStationById(idStation).then((station) => {
					this.station = station;
					this.destStatus = "distant";

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

}
