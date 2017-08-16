import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Train }        from '../../app/classes/train';
import { Player }        from '../../app/classes/player';
import { TrainService } from '../../app/classes/train.service';
import { GameService }  from '../../app/classes/game.service';

@Component({
  selector: 'page-train',
  templateUrl: 'train.html'
})

export class TrainPage {

	train: Train;

	constructor(public navCtrl: NavController, private gameService: GameService, private trainService: TrainService) {

    this.gameService.isDataReady().then(promise => this.train = this.gameService.player.trains[0]);
	}

}