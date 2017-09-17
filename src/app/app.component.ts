import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';;
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { GameService } from './classes/game.service';

import { ConnexionPage } from '../pages/connexion/connexion';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = ConnexionPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController, private storage: Storage, private gameService: GameService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      //this.storage.clear(); //To reset storage for testing purpose

      this.storage.get('idPlayer').then((val) => {
        if(val == null){ 
          this.gameService.connexionFormRequired = true;
          splashScreen.hide();
        }else{
          this.nav.push(TabsPage);
          this.gameService.setIdPlayer(val).then((promise) =>{
            this.gameService.connexionFormRequired = true;
            splashScreen.hide();
          })
        }
      })
      
    });

    this.pages = [
      { title: 'Connexion', component: ConnexionPage },
      { title: 'Play', component: TabsPage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
