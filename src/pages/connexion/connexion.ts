import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { GameService }  from '../../app/classes/game.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  	selector: 'page-connexion',
  	templateUrl: 'connexion.html'
})

export class ConnexionPage {
	login: string;
	password: string;

	constructor(public navCtrl: NavController, private gameService: GameService, public navParams: NavParams, public toastCtrl: ToastController) {

	}

	submitLogin(){
		this.gameService.connexion(this.login, this.password).then((status) => {
			if(status){
				this.navCtrl.push(TabsPage);
			}else{
				let toast = this.toastCtrl.create({
			     	message: 'Login is invalid',
			     	duration: 3000,
   	 				position: 'top'
			    });
			    toast.present();
			}
		});
  	}

}
