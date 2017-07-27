import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { GameService }  from '../../app/classes/game.service';


@Component({
	selector: 'page-wagons',
	templateUrl: 'wagons.html'
})
export class WagonsPage {

  constructor(public navCtrl: NavController, private plt: Platform, private localNotifications: LocalNotifications, alertCtrl: AlertController) {
		this.plt.ready().then((readySource) => {
			this.localNotifications.on('click', (notification, state) => {
				let json = JSON.parse(notification.data);
	 
				let alert = alertCtrl.create({
				 	title: notification.title,
				 	subTitle: json.mydata
				});
				alert.present();
			})
		});
	}

	scheduleNotification() {
		this.localNotifications.schedule({
			id: 1,
			title: 'Attention',
			text: 'Simons Notification',
			data: { mydata: 'My hidden message this is' },
			at: new Date(new Date().getTime() + 5 * 1000)
		});
	}

}
