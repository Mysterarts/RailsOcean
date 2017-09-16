webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainService = (function () {
    function TrainService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.apiUrl = configService.apiUrl + "trains";
    }
    TrainService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().trains; })
            .catch(this.handleError);
    };
    TrainService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TrainService.prototype.update = function (train) {
        var url = this.apiUrl + "/" + train.id;
        return this.http
            .put(url, JSON.stringify(train), { headers: this.headers })
            .toPromise()
            .then(function () { return train; })
            .catch(this.handleError);
    };
    TrainService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TrainService;
}());
TrainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], TrainService);

//# sourceMappingURL=train.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__train_train__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wagons_wagons__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__station_station__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__train_train__["a" /* TrainPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__wagons_wagons__["a" /* WagonsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__station_station__["a" /* StationPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Train" tabIcon="train"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Wagons" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Station" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Map" tabIcon="compass"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_train_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainPage = (function () {
    function TrainPage(navCtrl, gameService, trainService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.gameService = gameService;
        this.trainService = trainService;
        this.gameService.isDataReady().then(function (promise) {
            _this.train = _this.gameService.player.trains[_this.gameService.trainIndex];
        });
    }
    TrainPage.prototype.goToStationPage = function (idStation) {
        //this.navCtrl.push(StationPage);
        this.navCtrl.parent.select(2);
    };
    return TrainPage;
}());
TrainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-train',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/train/train.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Train <span *ngIf="train">- {{train.name}}</span></ion-title>\n		<ion-buttons end>\n	      	<button ion-button icon-only>\n	        	<ion-icon name="create"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<!--<ion-grid>\n		<ion-row>\n	    	<ion-col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5>-->\n				<ion-list no-border *ngIf="train">\n\n				    <ion-list-header no-margin>\n				    	Situation\n				    </ion-list-header>\n\n				    <ion-item *ngIf="train.isMoving" (click)="goToStationPage()">\n				      <ion-icon name=\'arrow-round-forward\' item-start></ion-icon>\n				      	Currently moving to Station\n				      <ion-note item-end color="danger">\n				      	{{gameService.station.name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item *ngIf="train.isMoving == false" (click)="goToStationPage()">\n				      <ion-icon name=\'pin\' item-start></ion-icon>\n				      	Station\n				      <ion-note item-end color="primary">\n				      	{{gameService.station.name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-list-header no-margin>\n				    	Locomotive\n				    </ion-list-header>\n\n				    <ion-item>\n				      <ion-icon name=\'train\' item-start></ion-icon>\n				      	Modele\n				      <ion-note item-end color="primary">\n				      	{{train.wagons[train.idLoco].name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item>\n				      <ion-icon name=\'speedometer\' item-start></ion-icon>\n				      	Power\n				      <ion-note item-end color="primary">\n				      	{{train.power}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item>\n				      <ion-icon name=\'albums\' item-start></ion-icon>\n				      	Wagons Capacity\n				      <ion-note item-end color="primary">\n				      	{{train.capacity}}\n				      </ion-note>\n				    </ion-item>\n				</ion-list>\n			<!--</ion-col>\n		</ion-row>\n	</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/train/train.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_2__app_classes_train_service__["a" /* TrainService */]])
], TrainPage);

//# sourceMappingURL=train.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerService = (function () {
    function PlayerService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "players";
    }
    PlayerService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().players; })
            .catch(this.handleError);
    };
    PlayerService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            //console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    PlayerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WagonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WagonService = (function () {
    function WagonService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "wagons";
        this.apiUrlData = configService.apiUrl + "wagonsData";
    }
    WagonService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().wagons; })
            .catch(this.handleError);
    };
    WagonService.prototype.getAllbyTrainId = function (id) {
        var url = this.apiUrl + "?filter=idTrain,eq," + id + "&transform=1";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().wagons; })
            .catch(this.handleError);
    };
    WagonService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WagonService.prototype.getDataById = function (id) {
        var url = this.apiUrlData + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    WagonService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return WagonService;
}());
WagonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], WagonService);

//# sourceMappingURL=wagon.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResourceService = (function () {
    function ResourceService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "resourcesData";
    }
    ResourceService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) {
            return response.json().resourcesData;
        })
            .catch(this.handleError);
    };
    ResourceService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ResourceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ResourceService;
}());
ResourceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], ResourceService);

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationService = (function () {
    function StationService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "stations";
    }
    StationService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().stations; })
            .catch(this.handleError);
    };
    StationService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            //TODO fix error (and apply it for other resources)
            /*
            if(response.json() == 0){
                console.warn("DATA ERROR: the station with id: "+id+" doesn't exist");
            }
            */
            return response.json();
        })
            .catch(this.handleError);
    };
    /*
    getStationById(id: number): Promise<Station> {
        let station = new Station(this, this.stationResourceService, this.sectionService);
        return station.populate(id).then((promise) => {
            return station;
        });
    }
    */
    StationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return StationService;
}());
StationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], StationService);

//# sourceMappingURL=station.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationResourceService = (function () {
    function StationResourceService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "stationResources";
    }
    StationResourceService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().stationResources; })
            .catch(this.handleError);
    };
    StationResourceService.prototype.getAllbyStationId = function (id) {
        var url = this.apiUrl + "?filter=idStation,eq," + id + "&transform=1";
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json().stationResources;
        })
            .catch(this.handleError);
    };
    StationResourceService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            //console.log(response);
            return response.json();
        })
            .catch(this.handleError);
    };
    StationResourceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return StationResourceService;
}());
StationResourceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], StationResourceService);

//# sourceMappingURL=stationResource.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionService = (function () {
    function SectionService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = configService.apiUrl + "sections";
    }
    SectionService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '?transform=1')
            .toPromise()
            .then(function (response) { return response.json().sections; })
            .catch(this.handleError);
    };
    SectionService.prototype.getAllFromStationId = function (id) {
        var _this = this;
        var url = this.apiUrl + "?filter=idStation1,eq," + id + "&transform=1";
        var url2 = this.apiUrl + "?filter=idStation2,eq," + id + "&transform=1";
        var allSections;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            allSections = response.json().sections;
            console.log(allSections);
            return _this.http.get(url2)
                .toPromise()
                .then(function (response) {
                return allSections.concat(response.json().sections);
            });
        })
            .catch(this.handleError);
    };
    SectionService.prototype.getById = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SectionService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return SectionService;
}());
SectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], SectionService);

//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WagonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WagonsPage = (function () {
    function WagonsPage(navCtrl, plt, localNotifications, alertCtrl, gameService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.gameService = gameService;
        this.plt.ready().then(function (readySource) {
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertCtrl.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
        this.gameService.isDataReady().then(function (promise) {
            _this.train = _this.gameService.player.trains[_this.gameService.trainIndex];
        });
    }
    WagonsPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attention',
            text: 'Simons Notification',
            data: { mydata: 'My hidden message this is' },
            at: new Date(new Date().getTime() + 5 * 1000)
        });
    };
    return WagonsPage;
}());
WagonsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wagons',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/wagons/wagons.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Wagons</ion-title>\n		<ion-buttons end>\n	      	<button ion-button icon-only>\n	        	<ion-icon name="create"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list *ngIf="train">\n		<ion-item *ngFor="let wagon of train.wagons">\n			<ion-avatar item-start>\n				<img src="{{\'assets/img/wagon_\'+wagon.id+\'.png\'}}">\n			</ion-avatar>\n			<h2>{{wagon.name}}</h2>\n			<h3>{{wagon.content.idResource | resource | capitalize}}</h3>\n			<p>{{wagon.content.quantity}} / {{wagon.capacity}}</p>\n		</ion-item>\n	</ion-list>\n\n	<!--<button ion-button color="primary" (click)="scheduleNotification()">Toggle Notif</button>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/wagons/wagons.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__["a" /* GameService */]])
], WagonsPage);

//# sourceMappingURL=wagons.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StationPage = StationPage_1 = (function () {
    function StationPage(navCtrl, gameService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.gameService = gameService;
        this.navParams = navParams;
        this.gameService.isDataReady().then(function (promise) {
            _this.idCurrentStation = _this.gameService.station.id;
            _this.isMoving = _this.gameService.player.trains[_this.gameService.trainIndex].isMoving;
            if (navParams.get("idStation") == undefined) {
                _this.station = _this.gameService.station;
                _this.destStatus = "same";
            }
            else {
                var idStation = navParams.get("idStation");
                gameService.getStationById(idStation).then(function (station) {
                    _this.station = station;
                    _this.destStatus = "distant";
                    if (_this.station.id == _this.idCurrentStation) {
                        _this.destStatus = "same";
                    }
                    else {
                        station.sections.forEach(function (section) {
                            if (section.idStation2 == _this.idCurrentStation || section.idStation1 == _this.idCurrentStation) {
                                _this.destStatus = "ok";
                                _this.destSection = section;
                            }
                        });
                    }
                });
            }
        });
    }
    StationPage.prototype.goToStationPage = function (idStation) {
        this.navCtrl.push(StationPage_1, {
            idStation: idStation
        });
    };
    StationPage.prototype.goToStation = function () {
        if (this.destStatus == "ok") {
            this.gameService.goToStation(this.station, this.destSection);
            this.navCtrl.push(StationPage_1);
        }
    };
    return StationPage;
}());
StationPage = StationPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-station',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/station/station.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Station <span *ngIf="station">- {{station.name}}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf="destStatus">\n    <ng-container *ngIf="gameService.player.trains[this.gameService.trainIndex].isMoving == false"> \n      <ion-card-content *ngIf="destStatus == \'same\'">\n        <ion-icon name=\'pin\' item-start></ion-icon>\n        This is the current station of your train\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'distant\'">\n        This station is not directly connected to your current station\n      </ion-card-content>\n      <button ion-button block color="secondary" *ngIf="destStatus == \'ok\'" (click)="goToStation()">\n        Go to this station\n      </button>\n    </ng-container>\n\n    <ng-container *ngIf="gameService.player.trains[this.gameService.trainIndex].isMoving"> \n      <ion-card-content *ngIf="destStatus == \'same\'">\n        <ion-icon name=\'pin\' item-start></ion-icon>\n        your train is heading towards this station\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'distant\'">\n        This station is not directly connected to the destination station\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'ok\'">\n        This station will be accessible from the destination station\n      </ion-card-content>\n    </ng-container>\n  </ng-container>\n\n  <ion-list no-border *ngIf="station">\n      <ion-list-header no-margin>\n        Available resources\n      </ion-list-header>\n      <ion-item *ngFor="let res of station.resourcesSell">\n        <ion-avatar item-start>\n          <img src="{{\'assets/img/resource_\'+res.idResource+\'.png\'}}">\n        </ion-avatar>\n        <h3>{{res.idResource | resource | capitalize}}</h3>\n      </ion-item>\n\n      <ion-list-header no-margin>\n        Sought resources\n      </ion-list-header>\n      <ion-item *ngFor="let res of station.resourcesBuy">\n        <ion-avatar item-start>\n          <img src="{{\'assets/img/resource_\'+res.idResource+\'.png\'}}">\n        </ion-avatar>\n        <h3>{{res.idResource | resource | capitalize}}</h3>\n      </ion-item>\n\n      <ion-list-header no-margin>\n        Next stations\n      </ion-list-header>\n      <ng-container *ngFor="let section of station.sections"> \n        <button ion-item *ngIf="section.toStation" (click)="goToStationPage(section.toStation.id)">\n          <ion-avatar item-start>\n            <img src="assets/img/station.png">\n          </ion-avatar>\n          <h2>{{section.toStation.name}}</h2>\n          <h3>Distance: {{section.distance}}</h3>\n        </button>\n      </ng-container> \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/station/station.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], StationPage);

var StationPage_1;
//# sourceMappingURL=station.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = (function () {
    function MapPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Map\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_resource_pipe__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_capitalize_pipe__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_game_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classes_config_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_player_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classes_train_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_wagon_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__classes_resource_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__classes_station_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classes_section_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__classes_stationResource_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_train_train__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_wagons_wagons__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_station_station__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';
*/


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__utils_resource_pipe__["a" /* ResourcePipe */],
            __WEBPACK_IMPORTED_MODULE_7__utils_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_17__pages_train_train__["a" /* TrainPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_wagons_wagons__["a" /* WagonsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_train_train__["a" /* TrainPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_wagons_wagons__["a" /* WagonsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_10__classes_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_11__classes_train_service__["a" /* TrainService */],
            __WEBPACK_IMPORTED_MODULE_12__classes_wagon_service__["a" /* WagonService */],
            __WEBPACK_IMPORTED_MODULE_13__classes_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_14__classes_station_service__["a" /* StationService */],
            __WEBPACK_IMPORTED_MODULE_15__classes_section_service__["a" /* SectionService */],
            __WEBPACK_IMPORTED_MODULE_16__classes_stationResource_service__["a" /* StationResourceService */],
            __WEBPACK_IMPORTED_MODULE_8__classes_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_9__classes_config_service__["a" /* ConfigService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
        this.apiUrl = 'http://rails.mysterarts.com/api.php/';
        //public apiUrl = 'http://localhost/rails/api.php/'; 
    }
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__train__ = __webpack_require__(280);


var Player = (function () {
    function Player(services) {
        this.services = services;
    }
    Player.prototype.populate = function (id) {
        var _this = this;
        return this.services.playerService.getById(id)
            .then(function (player) {
            Object.keys(player).forEach(function (key) {
                _this[key] = player[key];
            });
            _this.trains = new Array;
            var promises = new Array;
            //TODO Temp, check idPlayer in trains
            _this.idTrainsArray = [_this.idTrains];
            _this.idTrainsArray.forEach(function (id) {
                var train = new __WEBPACK_IMPORTED_MODULE_1__train__["a" /* Train */](_this.services);
                var promise = new Promise(function (resolve, reject) {
                    train.populate(id).then(function (p) {
                        resolve(train);
                    });
                    _this.trains.push(train);
                });
                promises.push(promise);
            });
            return Promise.all(promises);
        });
    };
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Train; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wagon__ = __webpack_require__(281);


var Train = (function () {
    function Train(services) {
        this.services = services;
        this.isMoving = false;
        // Properties from wagons
        this.power = 0;
        this.wagonsMax = 0;
        this.capacity = 0;
    }
    Train.prototype.populate = function (id) {
        var _this = this;
        return this.services.trainService.getById(id)
            .then(function (train) {
            console.log(train);
            Object.keys(train).forEach(function (key) {
                _this[key] = train[key];
            });
            return _this.services.wagonService.getAllbyTrainId(id);
        })
            .then(function (wagonsContent) {
            _this.wagons = new Array;
            var promises = new Array;
            wagonsContent.forEach(function (wagonContent) {
                var wagon = new __WEBPACK_IMPORTED_MODULE_1__wagon__["a" /* Wagon */](_this.services, wagonContent);
                var promise = new Promise(function (resolve, reject) {
                    wagon.populate(wagonContent.idWagon)
                        .then(function (res) {
                        _this.wagons.push(wagon);
                        //console.log(wagon);
                        if (wagon.type == "loco") {
                            _this.idLoco = _this.wagons.length - 1;
                        }
                        //Compute train properties based on wagons
                        _this.power += wagon.power;
                        _this.wagonsMax += wagon.wagonsMax;
                        _this.capacity += wagon.capacity;
                        resolve(wagon);
                    });
                });
                promises.push(promise);
            });
            return Promise.all(promises);
        });
    };
    return Train;
}());

//# sourceMappingURL=train.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wagon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);

var Wagon = (function () {
    function Wagon(services, content) {
        this.services = services;
        this.content = content;
        //Train properties
        this.power = 0;
        this.wagonsMax = 0;
        this.capacity = 0;
    }
    Wagon.prototype.populate = function (id) {
        var _this = this;
        return this.services.wagonService.getDataById(id).then(function (wagon) {
            Object.keys(wagon).forEach(function (key) {
                _this[key] = wagon[key];
            });
        });
    };
    return Wagon;
}());

//# sourceMappingURL=wagon.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Station; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);

var Station = (function () {
    function Station(stationService, stationResourceService, sectionService) {
        this.stationService = stationService;
        this.stationResourceService = stationResourceService;
        this.sectionService = sectionService;
    }
    Station.prototype.populate = function (id) {
        var _this = this;
        return this.stationService.getById(id).then(function (station) {
            Object.keys(station).forEach(function (key) {
                _this[key] = station[key];
            });
            return _this.stationResourceService.getAllbyStationId(id).then(function (ress) {
                //console.log(ress);
                _this.resourcesSell = new Array();
                _this.resourcesBuy = new Array();
                ress.forEach(function (res) {
                    if (res.type == "sell") {
                        _this.resourcesSell.push(res);
                    }
                    else {
                        _this.resourcesBuy.push(res);
                    }
                });
                return _this.sectionService.getAllFromStationId(id).then(function (sects) {
                    //console.log(sects);
                    _this.sections = sects;
                }).then(function (promise) {
                    var promises = new Array;
                    _this.sections.forEach(function (section) {
                        var promise = new Promise(function (resolve, reject) {
                            var idStationTo = section.idStation1;
                            if (section.idStation1 == id) {
                                idStationTo = section.idStation2;
                            }
                            _this.stationService.getById(idStationTo)
                                .then(function (toStation) {
                                section.toStation = toStation;
                                resolve(toStation);
                            });
                        });
                        promises.push(promise);
                    });
                    return Promise.all(promises);
                });
            });
        });
    };
    return Station;
}());

//# sourceMappingURL=station.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_game_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourcePipe = (function () {
    function ResourcePipe(services) {
        this.services = services;
    }
    ResourcePipe.prototype.transform = function (value) {
        return this.services.resources.find(function (res) { return res.id === value; }).name;
    };
    return ResourcePipe;
}());
ResourcePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'resource' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__classes_game_service__["a" /* GameService */]])
], ResourcePipe);

//# sourceMappingURL=resource.pipe.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'capitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__train_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wagon_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resource_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__station_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stationResource_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__station__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GameService = (function () {
    function GameService(playerService, trainService, wagonService, resourceService, stationService, stationResourceService, sectionService) {
        this.playerService = playerService;
        this.trainService = trainService;
        this.wagonService = wagonService;
        this.resourceService = resourceService;
        this.stationService = stationService;
        this.stationResourceService = stationResourceService;
        this.sectionService = sectionService;
        this.playerId = 0;
        this.trainIndex = 0;
        this.dataReady = false;
        this.dataLoading = false;
        this.services = { playerService: playerService, trainService: trainService, wagonService: wagonService, resourceService: resourceService };
    }
    GameService.prototype.refreshData = function () {
        var _this = this;
        //Populate resources
        return this.resourceService.getAll().then(function (promise) {
            _this.resources = promise;
            //console.log(this.resources);
            //Populuate player (with train and wagons)
            _this.player = new __WEBPACK_IMPORTED_MODULE_9__player__["a" /* Player */](_this.services);
            return _this.player.populate(_this.playerId).then(function (promise) {
                console.log(_this.player);
                _this.updateStatus(0);
                _this.station = new __WEBPACK_IMPORTED_MODULE_10__station__["a" /* Station */](_this.stationService, _this.stationResourceService, _this.sectionService);
                return _this.station.populate(_this.player.trains[_this.trainIndex].idStation).then(function (promise) {
                    //console.log(this.station.resourcesSell);
                    _this.dataReady = true;
                    _this.dataLoading = false;
                    //this.dataReadyEvent.emit(this.player);
                });
            });
        });
    };
    GameService.prototype.isDataReady = function () {
        var _this = this;
        if (!this.dataReady) {
            if (!this.dataLoading) {
                this.dataLoading = true;
                return this.refreshData();
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.waitForDataReady(resolve, reject);
                });
            }
        }
        else {
            //console.log("data already fetched");
            return Promise.resolve();
        }
    };
    GameService.prototype.waitForDataReady = function (resolve, reject) {
        var _this = this;
        setTimeout(function () {
            if (!_this.dataLoading) {
                //console.log("stop");
                resolve();
            }
            else {
                //console.log("continue");
                _this.waitForDataReady(resolve, reject);
            }
        }, 500);
    };
    GameService.prototype.getStationById = function (id) {
        var station = new __WEBPACK_IMPORTED_MODULE_10__station__["a" /* Station */](this.stationService, this.stationResourceService, this.sectionService);
        return station.populate(id).then(function (promise) {
            return station;
        });
    };
    GameService.prototype.goToStation = function (station, section) {
        this.station = station;
        this.player.trains[this.trainIndex].idStation = station.id;
        this.player.trains[this.trainIndex].startTime = (new Date()).valueOf();
        this.player.trains[this.trainIndex].arrivalTime = (new Date()).valueOf() + section.distance * 100;
        this.updateStatus(0);
        this.trainService.update(this.player.trains[this.trainIndex]);
    };
    GameService.prototype.updateStatus = function (delay) {
        //console.log(this.player.trains[this.trainIndex].arrivalTime+" "+(new Date()).valueOf());
        var _this = this;
        setTimeout(function () {
            if (_this.player.trains[_this.trainIndex].arrivalTime <= (new Date()).valueOf()) {
                _this.player.trains[_this.trainIndex].isMoving = false;
                //console.log("stop moving");
            }
            else {
                _this.player.trains[_this.trainIndex].isMoving = true;
                //console.log("continue moving");
                _this.updateStatus(1000);
            }
        }, delay);
    };
    return GameService;
}());
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_3__train_service__["a" /* TrainService */], __WEBPACK_IMPORTED_MODULE_4__wagon_service__["a" /* WagonService */], __WEBPACK_IMPORTED_MODULE_5__resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_6__station_service__["a" /* StationService */], __WEBPACK_IMPORTED_MODULE_7__stationResource_service__["a" /* StationResourceService */], __WEBPACK_IMPORTED_MODULE_8__section_service__["a" /* SectionService */]])
], GameService);

//# sourceMappingURL=game.service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map