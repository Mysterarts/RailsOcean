import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { Station } from '../../app/classes/station';

@Component({
  selector: 'page-station',
  templateUrl: 'station.html'
})
export class StationPage {

	station: Station;

  	constructor(public navCtrl: NavController, private gameService: GameService) {

	  	this.gameService.isDataReady().then((promise) => {
			this.station = this.gameService.station;
		});

  }

}
