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
	sumAll: number = 0;
	moneySum: number = 0;
	moneySumAll: number = 0;

	constructor(
		public navCtrl: NavController, 
		private gameService: GameService, 
		public params: NavParams,
		public viewCtrl: ViewController) {

		this.gameService.isDataReady().then((promise) => {
			this.train = this.gameService.player.trains[this.gameService.trainIndex];
			this.updateSum();
		});

		this.idResource = this.params.get('res').idResource;
		this.type = this.params.get('type');
	}

	dismiss() {
    	this.train.wagons.forEach((wagon) => {
  			wagon.quantityToSell = 0;
  			wagon.quantityToBuy = 0;
  		});

  		this.viewCtrl.dismiss();
  	}

  	updateSum(){
  		this.sum = this.sumAll = 0;

  		this.train.wagons.forEach((wagon) => {
  			if(this.type == "buy"){	
	  				this.sum += wagon.quantityToBuy;
	  		}else{
	  			if(wagon.content.idResource == this.idResource){
	  				this.sum += wagon.quantityToSell;
	  				this.sumAll += wagon.content.quantity;
	  			}
	  		}
  		});

  		this.refreshPrice();
  		this.moneySum = this.sum * this.priceResource;
  		this.moneySumAll = this.sumAll * this.priceResource;
  	}

  	refreshPrice(){
	  	if(this.type == "buy")
	  	{	
	  		this.gameService.station.resourcesSell.forEach((res) => {
	  			if(res.idResource == this.idResource){
	  				this.priceResource = res.price;
	  			}
	  		});
	  	}else{
	  		this.gameService.station.resourcesBuy.forEach((res) => {
  			if(res.idResource == this.idResource){
  				this.priceResource = res.price;
  			}
  		});
	  	}
  	}

  	sellResource(all:boolean){
  		this.refreshPrice();
  		this.train.wagons.forEach((wagon) => {
  			if(wagon.content.idResource == this.idResource){

  				if(all){
  					wagon.content.quantity = 0;
  				}else{
  					wagon.content.quantity -= wagon.quantityToSell;
  				}

  				if(wagon.content.quantity <= 0){
  					wagon.content.idResource = 0;
  				}
  				this.gameService.services.wagonService.update(wagon);
  			}

  			wagon.quantityToSell = 0;
  		});

  		if(all){
			this.gameService.player.money += this.moneySumAll;
		}else{
			this.gameService.player.money += this.moneySum;
		}

  		this.gameService.updatePlayer();

  		this.viewCtrl.dismiss();
  	}

  	buyResource(all:boolean){
  		this.refreshPrice();
  		//let totalBought: number = 0; TODO manage quantity in station

  		if(this.gameService.player.money >= this.moneySum){
	  		this.train.wagons.forEach((wagon) => {

	  			if(wagon.quantityToBuy > 0){

					if(all){
						//wagon.content.quantity = 0;
					}else{
						wagon.content.quantity += wagon.quantityToBuy;
						wagon.content.idResource = this.idResource;
					}

					this.gameService.services.wagonService.update(wagon);
				}

	  			wagon.quantityToBuy = 0;
	  		});

	  		if(all){
				//this.gameService.player.money += this.moneySumAll;
			}else{
				this.gameService.player.money -= this.moneySum;
			}

	  		this.gameService.updatePlayer();

	  		this.viewCtrl.dismiss();
	  	}else{
		    this.gameService.toast("You don't have enough money ("+this.gameService.player.money+")!");
	  	}
  	}

  	arraySum(items, prop){
	    return items.reduce( function(a, b){
	        return a + b[prop];
	    }, 0);
	};

}
