import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  	selector: 'page-parameters',
  	templateUrl: 'parameters.html'
})

export class ParametersPage {
	login: string;
	password: string;
	connexionRequired;

	constructor(public navCtrl: NavController, private gameService: GameService, public navParams: NavParams, public toastCtrl: ToastController) {

	}

	submitParam(){
		this.gameService.updatePlayer().then((status) => {
			if(status){
				this.navCtrl.push(TabsPage);

				let toast = this.toastCtrl.create({
			     	message: 'Parameters saved',
			     	duration: 3000,
   	 				position: 'top'
			    });
			    toast.present();
			}
		});
  	}

}
