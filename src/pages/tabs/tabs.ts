import { Component } from '@angular/core';

import { TrainPage } from '../train/train';
import { WagonsPage } from '../wagons/wagons';
import { StationPage } from '../station/station';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TrainPage;
  tab2Root = WagonsPage;
  tab3Root = StationPage;
  tab4Root = MapPage;

  constructor() {

  }
}
