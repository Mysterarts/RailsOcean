import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { Train }        from '../../app/classes/train';

@Component({
  	selector: 'page-parameters',
  	templateUrl: 'wagonsModal.html'
})

export class WagonsModalPage {
	train: Train;
	idResource: number;
	priceResource: number;
	type: string;
	sum: number = 0;
	moneySum: number = 0;

	constructor(
		public navCtrl: NavController, 
		private gameService: GameService, 
		public params: NavParams,
		public viewCtrl: ViewController) {

		this.gameService.isDataReady().then((promise) => {
			this.train = this.gameService.player.trains[this.gameService.trainIndex];
		});

		this.idResource = this.params.get('idResource');
		this.type = this.params.get('type');
	}

	dismiss() {
    	this.viewCtrl.dismiss();
  	}

  	updateSum(){
  		this.sum = this.arraySum(this.train.wagons, "quantityToSell"); 
  		this.refreshPrice();
  		this.moneySum = this.sum * this.priceResource;
  	}

  	refreshPrice(){
  		this.gameService.station.resourcesBuy.forEach((res) => {
  			if(res.idResource == this.idResource){
  				this.priceResource = res.price;
  			}
  		});
  	}

  	sellResource(){
  		this.refreshPrice();
  		this.train.wagons.forEach((wagon) => {
  			if(wagon.content.idResource == this.idResource){
  				
  			}
  		});
  	}

  	arraySum(items, prop){
	    return items.reduce( function(a, b){
	        return a + b[prop];
	    }, 0);
	};

}
