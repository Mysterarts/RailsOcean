import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { Station } from '../../app/classes/station';


@Component({
  selector: 'page-station',
  templateUrl: 'station.html'
})
export class StationPage {

	station: Station;

  	constructor(public navCtrl: NavController, private gameService: GameService, public navParams: NavParams) {

	  	this.gameService.isDataReady().then((promise) => {
			if(navParams.get("idStation") == undefined){	
				this.station = this.gameService.station;
			}else{
				let idStation = navParams.get("idStation");
				console.log(idStation);
				
				gameService.getStationById(idStation).then((station) => {
					this.station = station;
				});
			}
		});

  	}

  	goToStation(idStation: number){
  		this.navCtrl.push(StationPage, {
	    	idStation: idStation
	    });
  	}

}
