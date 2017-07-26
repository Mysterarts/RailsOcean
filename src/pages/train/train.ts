import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Train }        from '../../app/classes/train';
import { TrainService } from '../../app/classes/train.service';
import { GameService }  from '../../app/classes/game.service';

@Component({
  selector: 'page-train',
  templateUrl: 'train.html'
})

export class TrainPage implements OnInit {

	train: Train;

	constructor(public navCtrl: NavController, private gameService: GameService, private trainService: TrainService) {

	}

	ngOnInit(): void {
      	this.trainService.getById(0).then((train) => {
      		this.train = train;
      		console.log(this.train);
      	})

        //console.log(this.gameService.player);
	}

}