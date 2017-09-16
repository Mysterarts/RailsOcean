import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalNotifications }     from '@ionic-native/local-notifications';
import { HttpModule }             from '@angular/http';
/*
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';
*/
import { ResourcePipe }           from './utils/resource.pipe';
import { CapitalizePipe }         from './utils/capitalize.pipe';

import { GameService }            from './classes/game.service';
import { ConfigService }          from './classes/config.service';
import { PlayerService }          from './classes/player.service';
import { TrainService }           from './classes/train.service';
import { WagonService }           from './classes/wagon.service';
import { ResourceService }        from './classes/resource.service';
import { StationService }         from './classes/station.service';
import { SectionService }         from './classes/section.service';
import { StationResourceService } from './classes/stationResource.service';

import { TrainPage }              from '../pages/train/train';
import { WagonsPage }             from '../pages/wagons/wagons';
import { StationPage }            from '../pages/station/station';
import { MapPage }                from '../pages/map/map';
import { ConnexionPage }          from '../pages/connexion/connexion';
import { TabsPage }               from '../pages/tabs/tabs';

import { StatusBar }              from '@ionic-native/status-bar';
import { SplashScreen }           from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ResourcePipe,
    CapitalizePipe,
    TrainPage,
    WagonsPage,
    StationPage,
    MapPage,
    ConnexionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrainPage,
    WagonsPage,
    StationPage,
    MapPage,
    ConnexionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    PlayerService,
    TrainService,
    WagonService,
    ResourceService,
    StationService,
    SectionService,
    StationResourceService,
    GameService,
    ConfigService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
