import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Train }        from '../../app/classes/train';
import { TrainService } from '../../app/classes/train.service';

@Component({
  selector: 'page-train',
  templateUrl: 'train.html'
})
export class TrainPage implements OnInit {

	train: Train;

	constructor(public navCtrl: NavController, private trainService: TrainService) {

	}

	ngOnInit(): void {
      	this.trainService.getTrain(0).then((train) => {
      		this.train = train;
      		console.log(this.train);
      	})
	}

}
