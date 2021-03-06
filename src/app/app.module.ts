import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalNotifications }     from '@ionic-native/local-notifications';
import { HttpModule }             from '@angular/http';
import { IonicStorageModule }     from '@ionic/storage';
import { MomentModule }           from 'angular2-moment';
/*
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';
*/
import { ResourcePipe }           from './utils/resource.pipe';
import { CapitalizePipe }         from './utils/capitalize.pipe';
import { FloorPipe }              from 'angular-pipes/src/math/floor.pipe';

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
import { ParametersPage }         from '../pages/parameters/parameters';
import { TabsPage }               from '../pages/tabs/tabs';
import { WagonsModalPage }        from '../pages/modal/wagonsModal';

import { StatusBar }              from '@ionic-native/status-bar';
import { SplashScreen }           from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ResourcePipe,
    CapitalizePipe,
    FloorPipe,
    TrainPage,
    WagonsPage,
    StationPage,
    MapPage,
    ConnexionPage,
    ParametersPage,
    TabsPage,
    WagonsModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrainPage,
    WagonsPage,
    StationPage,
    MapPage,
    ConnexionPage,
    ParametersPage,
    TabsPage,
    WagonsModalPage
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
