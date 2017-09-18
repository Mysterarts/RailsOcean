webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], TrainService);

//# sourceMappingURL=train.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(412);
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
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
    PlayerService.prototype.getByLogin = function (login, password) {
        var url = this.apiUrl + "?filter[]=name,eq," + login + "&filter[]=password,eq," + password + "&transform=1";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().players; })
            .catch(this.handleError);
    };
    PlayerService.prototype.update = function (player) {
        var url = this.apiUrl + "/" + player.id;
        return this.http
            .put(url, JSON.stringify(player), { headers: this.headers })
            .toPromise()
            .then(function () { return player; })
            .catch(this.handleError);
    };
    PlayerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WagonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], WagonService);

//# sourceMappingURL=wagon.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], ResourceService);

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], StationService);

//# sourceMappingURL=station.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], StationResourceService);

//# sourceMappingURL=stationResource.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
], SectionService);

//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnexionPage = (function () {
    function ConnexionPage(navCtrl, gameService, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.gameService = gameService;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ConnexionPage.prototype.submitLogin = function () {
        var _this = this;
        this.gameService.connexion(this.login, this.password).then(function (status) {
            if (status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Login is invalid',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    return ConnexionPage;
}());
ConnexionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-connexion',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/connexion/connexion.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="gameService.connexionFormRequired"> \n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="login"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="submitLogin()">Login</button>\n\n</ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/connexion/connexion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ConnexionPage);

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_train_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__ = __webpack_require__(27);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-train',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/train/train.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n	    	<ion-icon name="menu"></ion-icon>\n	    </button>\n		<ion-title>Train <span *ngIf="train">- {{train.name}}</span></ion-title>\n		<ion-buttons end>\n	      	<button ion-button icon-only>\n	        	<ion-icon name="create"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<!--<ion-grid>\n		<ion-row>\n	    	<ion-col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5>-->\n				<ion-list no-border *ngIf="train">\n\n				    <ion-list-header no-margin>\n				    	Situation\n				    </ion-list-header>\n\n				    <ion-item *ngIf="train.isMoving" (click)="goToStationPage()">\n				      <ion-icon name=\'arrow-round-forward\' item-start></ion-icon>\n				      	Currently moving to\n				      <ion-note item-end color="danger">\n				      	{{gameService.station.name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item *ngIf="train.isMoving">\n				      <ion-icon name=\'timer\' item-start></ion-icon>\n				      	Arrival in\n				      <ion-note item-end color="danger">\n				      	<!--{{train.timeOfArrival | amDuration:\'milliseconds\'}}\n				      	{{train.timeOfArrival / 1000 % (60 * 60 * 24) / (60 * 60) | number: 0}}:\n						{{train.timeOfArrival / 1000 % (60 * 60) / 60 | number: 0}}:-->\n						{{train.timeOfArrival / 1000 % (60 * 60) / 60 | number: \'1.0-0\'}}:{{train.timeOfArrival / 1000 % 60 | number: \'1.0-0\'}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item *ngIf="train.isMoving == false" (click)="goToStationPage()">\n				      <ion-icon name=\'pin\' item-start></ion-icon>\n				      	Station\n				      <ion-note item-end color="primary">\n				      	{{gameService.station.name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-list-header no-margin>\n				    	Locomotive\n				    </ion-list-header>\n\n				    <ion-item>\n				      <ion-icon name=\'train\' item-start></ion-icon>\n				      	Modele\n				      <ion-note item-end color="primary">\n				      	{{train.wagons[train.idLoco].name}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item>\n				      <ion-icon name=\'speedometer\' item-start></ion-icon>\n				      	Power\n				      <ion-note item-end color="primary">\n				      	{{train.power}}\n				      </ion-note>\n				    </ion-item>\n\n				    <ion-item>\n				      <ion-icon name=\'albums\' item-start></ion-icon>\n				      	Wagons Capacity\n				      <ion-note item-end color="primary">\n				      	{{train.capacity}}\n				      </ion-note>\n				    </ion-item>\n				</ion-list>\n			<!--</ion-col>\n		</ion-row>\n	</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/train/train.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_2__app_classes_train_service__["a" /* TrainService */]])
], TrainPage);

//# sourceMappingURL=train.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WagonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__ = __webpack_require__(27);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-wagons',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/wagons/wagons.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n	    	<ion-icon name="menu"></ion-icon>\n	    </button>\n		<ion-title>Wagons</ion-title>\n		<ion-buttons end>\n	      	<button ion-button icon-only>\n	        	<ion-icon name="create"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list *ngIf="train">\n		<ion-item *ngFor="let wagon of train.wagons">\n			<ion-avatar item-start>\n				<img src="{{\'assets/img/wagon_\'+wagon.id+\'.png\'}}">\n			</ion-avatar>\n			<h2>{{wagon.name}}</h2>\n			<h3>{{wagon.content.idResource | resource | capitalize}}</h3>\n			<p>{{wagon.content.quantity}} / {{wagon.capacity}}</p>\n		</ion-item>\n	</ion-list>\n\n	<!--<button ion-button color="primary" (click)="scheduleNotification()">Toggle Notif</button>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/wagons/wagons.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__app_classes_game_service__["a" /* GameService */]])
], WagonsPage);

//# sourceMappingURL=wagons.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__ = __webpack_require__(27);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-station',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/station/station.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Station <span *ngIf="station">- {{station.name}}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf="destStatus">\n    <ng-container *ngIf="gameService.player.trains[this.gameService.trainIndex].isMoving == false"> \n      <ion-card-content *ngIf="destStatus == \'same\'">\n        <ion-icon name=\'pin\' item-start></ion-icon>\n        This is the current station of your train\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'distant\'">\n        This station is not directly connected to your current station\n      </ion-card-content>\n      <button ion-button block color="secondary" *ngIf="destStatus == \'ok\'" (click)="goToStation()">\n        Go to this station\n      </button>\n    </ng-container>\n\n    <ng-container *ngIf="gameService.player.trains[this.gameService.trainIndex].isMoving"> \n      <ion-card-content *ngIf="destStatus == \'same\'">\n        <ion-icon name=\'pin\' item-start></ion-icon>\n        your train is heading towards this station ({{gameService.player.trains[gameService.trainIndex].timeOfArrival / 1000 % (60 * 60) / 60 | number: \'1.0-0\'}}:{{gameService.player.trains[gameService.trainIndex].timeOfArrival / 1000 % 60 | number: \'1.0-0\'}})\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'distant\'">\n        This station is not directly connected to the destination station\n      </ion-card-content>\n      <ion-card-content *ngIf="destStatus == \'ok\'">\n        This station will be accessible from the destination station\n      </ion-card-content>\n    </ng-container>\n  </ng-container>\n\n  <ion-list no-border *ngIf="station">\n      <ion-list-header no-margin>\n        Available resources\n      </ion-list-header>\n      <ion-item *ngFor="let res of station.resourcesSell">\n        <ion-avatar item-start>\n          <img src="{{\'assets/img/resource_\'+res.idResource+\'.png\'}}">\n        </ion-avatar>\n        <h3>{{res.idResource | resource | capitalize}}</h3>\n      </ion-item>\n\n      <ion-list-header no-margin>\n        Sought resources\n      </ion-list-header>\n      <ion-item *ngFor="let res of station.resourcesBuy">\n        <ion-avatar item-start>\n          <img src="{{\'assets/img/resource_\'+res.idResource+\'.png\'}}">\n        </ion-avatar>\n        <h3>{{res.idResource | resource | capitalize}}</h3>\n      </ion-item>\n\n      <ion-list-header no-margin>\n        Next stations\n      </ion-list-header>\n      <ng-container *ngFor="let section of station.sections"> \n        <button ion-item *ngIf="section.toStation" (click)="goToStationPage(section.toStation.id)">\n          <ion-avatar item-start>\n            <img src="assets/img/station.png">\n          </ion-avatar>\n          <h2>{{section.toStation.name}}</h2>\n          <h3>Distance: {{section.distance}}</h3>\n        </button>\n      </ng-container> \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/station/station.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], StationPage);

var StationPage_1;
//# sourceMappingURL=station.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Map\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParametersPage = (function () {
    function ParametersPage(navCtrl, gameService, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.gameService = gameService;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ParametersPage.prototype.submitParam = function () {
        var _this = this;
        this.gameService.updatePlayer().then(function (status) {
            if (status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                var toast = _this.toastCtrl.create({
                    message: 'Parameters saved',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    return ParametersPage;
}());
ParametersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-parameters',template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/parameters/parameters.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Parameters</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="gameService.player"> \n\n    <ion-list>\n\n    <ion-item>\n      <ion-label>Speed x100</ion-label>\n      <ion-toggle [(ngModel)]="gameService.player.cheatSpeed"></ion-toggle>\n    </ion-item>\n\n    </ion-list>\n\n    <button ion-button color="primary" block (click)="submitParam()">Save</button>\n\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/parameters/parameters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_classes_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ParametersPage);

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__train_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wagon_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resource_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__station_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stationResource_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__section_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__station__ = __webpack_require__(416);
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
    function GameService(playerService, trainService, wagonService, resourceService, stationService, stationResourceService, sectionService, storage, toastCtrl) {
        this.playerService = playerService;
        this.trainService = trainService;
        this.wagonService = wagonService;
        this.resourceService = resourceService;
        this.stationService = stationService;
        this.stationResourceService = stationResourceService;
        this.sectionService = sectionService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.playerId = -1;
        this.trainIndex = 0;
        this.dataReady = false;
        this.dataLoading = false;
        this.connexionFormRequired = false;
        this.menuReady = false;
        this.services = { playerService: playerService, trainService: trainService, wagonService: wagonService, resourceService: resourceService };
    }
    GameService.prototype.refreshData = function () {
        var _this = this;
        //Populate resources
        return this.resourceService.getAll().then(function (promise) {
            _this.resources = promise;
            //console.log(this.resources);
            //Populuate player (with train and wagons)
            _this.player = new __WEBPACK_IMPORTED_MODULE_11__player__["a" /* Player */](_this.services);
            return _this.player.populate(_this.playerId).then(function (promise) {
                console.log(_this.player);
                //this.updateStatus(0);
                _this.station = new __WEBPACK_IMPORTED_MODULE_12__station__["a" /* Station */](_this.stationService, _this.stationResourceService, _this.sectionService);
                return _this.station.populate(_this.player.trains[_this.trainIndex].idStation).then(function (promise) {
                    //console.log(this.station.resourcesSell);
                    _this.updateStatus(0);
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
            console.log("data already fetched");
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
        var station = new __WEBPACK_IMPORTED_MODULE_12__station__["a" /* Station */](this.stationService, this.stationResourceService, this.sectionService);
        return station.populate(id).then(function (promise) {
            return station;
        });
    };
    GameService.prototype.goToStation = function (station, section) {
        var duration = section.distance * 1000000 / this.player.trains[this.trainIndex].power;
        if (this.player.cheatSpeed) {
            duration /= 100;
        }
        this.station = station;
        this.player.trains[this.trainIndex].idStation = station.id;
        this.player.trains[this.trainIndex].startTime = (new Date()).valueOf();
        this.player.trains[this.trainIndex].arrivalTime = (new Date()).valueOf() + duration;
        this.player.trains[this.trainIndex].isMovingDuringSession = true;
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
                //TODO Toast?
                if (_this.player.trains[_this.trainIndex].isMovingDuringSession) {
                    var toast = _this.toastCtrl.create({
                        message: 'Your train arrived in ' + _this.station.name,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
            else {
                _this.player.trains[_this.trainIndex].isMoving = true;
                _this.player.trains[_this.trainIndex].timeOfArrival = _this.player.trains[_this.trainIndex].arrivalTime - (new Date()).valueOf();
                //console.log(this.player.trains[this.trainIndex].timeOfArrival);
                //console.log("continue moving");
                _this.updateStatus(1000);
            }
        }, delay);
    };
    GameService.prototype.connexion = function (login, password) {
        var _this = this;
        return this.playerService.getByLogin(login, password).then(function (players) {
            if (players.length > 0) {
                //this.player = players[0];
                _this.playerId = players[0].id;
                _this.storage.set('idPlayer', _this.playerId);
                _this.dataReady = false;
                return _this.isDataReady().then(function (promise) {
                    _this.menuReady = true;
                    return 1;
                });
            }
            else {
                return 0;
            }
        });
    };
    GameService.prototype.setIdPlayer = function (id) {
        var _this = this;
        this.playerId = id;
        this.dataReady = false;
        return this.isDataReady().then(function (promise) {
            _this.menuReady = true;
            return 1;
        });
    };
    GameService.prototype.updatePlayer = function () {
        return this.playerService.update(this.player).then(function (player) {
            return 1;
        });
    };
    return GameService;
}());
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */],
        __WEBPACK_IMPORTED_MODULE_5__train_service__["a" /* TrainService */],
        __WEBPACK_IMPORTED_MODULE_6__wagon_service__["a" /* WagonService */],
        __WEBPACK_IMPORTED_MODULE_7__resource_service__["a" /* ResourceService */],
        __WEBPACK_IMPORTED_MODULE_8__station_service__["a" /* StationService */],
        __WEBPACK_IMPORTED_MODULE_9__stationResource_service__["a" /* StationResourceService */],
        __WEBPACK_IMPORTED_MODULE_10__section_service__["a" /* SectionService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
], GameService);

//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 29:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_resource_pipe__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_capitalize_pipe__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_game_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classes_config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_player_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__classes_train_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__classes_wagon_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classes_resource_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__classes_station_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__classes_section_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classes_stationResource_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_train_train__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_wagons_wagons__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_station_station__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_map_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_connexion_connexion__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(199);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__utils_resource_pipe__["a" /* ResourcePipe */],
            __WEBPACK_IMPORTED_MODULE_9__utils_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_19__pages_train_train__["a" /* TrainPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_wagons_wagons__["a" /* WagonsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_connexion_connexion__["a" /* ConnexionPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_train_train__["a" /* TrainPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_wagons_wagons__["a" /* WagonsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_connexion_connexion__["a" /* ConnexionPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_12__classes_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_13__classes_train_service__["a" /* TrainService */],
            __WEBPACK_IMPORTED_MODULE_14__classes_wagon_service__["a" /* WagonService */],
            __WEBPACK_IMPORTED_MODULE_15__classes_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_16__classes_station_service__["a" /* StationService */],
            __WEBPACK_IMPORTED_MODULE_17__classes_section_service__["a" /* SectionService */],
            __WEBPACK_IMPORTED_MODULE_18__classes_stationResource_service__["a" /* StationResourceService */],
            __WEBPACK_IMPORTED_MODULE_10__classes_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_11__classes_config_service__["a" /* ConfigService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_game_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_parameters_parameters__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, storage, gameService) {
        var _this = this;
        this.menu = menu;
        this.storage = storage;
        this.gameService = gameService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__["a" /* ConnexionPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //this.storage.clear(); //To reset storage for testing purpose
            _this.storage.get('idPlayer').then(function (val) {
                if (val == null) {
                    _this.gameService.connexionFormRequired = true;
                    splashScreen.hide();
                }
                else {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]);
                    _this.gameService.setIdPlayer(val).then(function (promise) {
                        _this.gameService.connexionFormRequired = true;
                        splashScreen.hide();
                    });
                }
            });
        });
        this.pages = [
            { title: 'Play', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Change user', component: __WEBPACK_IMPORTED_MODULE_6__pages_connexion_connexion__["a" /* ConnexionPage */] },
            { title: 'Parameters', component: __WEBPACK_IMPORTED_MODULE_7__pages_parameters_parameters__["a" /* ParametersPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/app/app.html"*/'<ion-menu [content]="content" *ngIf="gameService.menuReady">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__classes_game_service__["a" /* GameService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__train__ = __webpack_require__(414);


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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Train; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wagon__ = __webpack_require__(415);


var Train = (function () {
    function Train(services) {
        this.services = services;
        this.isMoving = false;
        this.isMovingDuringSession = false;
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wagon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Station; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(14);
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

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es.js": 245,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fo": 251,
	"./fo.js": 251,
	"./fr": 252,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 252,
	"./fy": 255,
	"./fy.js": 255,
	"./gd": 256,
	"./gd.js": 256,
	"./gl": 257,
	"./gl.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./my": 286,
	"./my.js": 286,
	"./nb": 287,
	"./nb.js": 287,
	"./ne": 288,
	"./ne.js": 288,
	"./nl": 289,
	"./nl-be": 290,
	"./nl-be.js": 290,
	"./nl.js": 289,
	"./nn": 291,
	"./nn.js": 291,
	"./pa-in": 292,
	"./pa-in.js": 292,
	"./pl": 293,
	"./pl.js": 293,
	"./pt": 294,
	"./pt-br": 295,
	"./pt-br.js": 295,
	"./pt.js": 294,
	"./ro": 296,
	"./ro.js": 296,
	"./ru": 297,
	"./ru.js": 297,
	"./sd": 298,
	"./sd.js": 298,
	"./se": 299,
	"./se.js": 299,
	"./si": 300,
	"./si.js": 300,
	"./sk": 301,
	"./sk.js": 301,
	"./sl": 302,
	"./sl.js": 302,
	"./sq": 303,
	"./sq.js": 303,
	"./sr": 304,
	"./sr-cyrl": 305,
	"./sr-cyrl.js": 305,
	"./sr.js": 304,
	"./ss": 306,
	"./ss.js": 306,
	"./sv": 307,
	"./sv.js": 307,
	"./sw": 308,
	"./sw.js": 308,
	"./ta": 309,
	"./ta.js": 309,
	"./te": 310,
	"./te.js": 310,
	"./tet": 311,
	"./tet.js": 311,
	"./th": 312,
	"./th.js": 312,
	"./tl-ph": 313,
	"./tl-ph.js": 313,
	"./tlh": 314,
	"./tlh.js": 314,
	"./tr": 315,
	"./tr.js": 315,
	"./tzl": 316,
	"./tzl.js": 316,
	"./tzm": 317,
	"./tzm-latn": 318,
	"./tzm-latn.js": 318,
	"./tzm.js": 317,
	"./uk": 319,
	"./uk.js": 319,
	"./ur": 320,
	"./ur.js": 320,
	"./uz": 321,
	"./uz-latn": 322,
	"./uz-latn.js": 322,
	"./uz.js": 321,
	"./vi": 323,
	"./vi.js": 323,
	"./x-pseudo": 324,
	"./x-pseudo.js": 324,
	"./yo": 325,
	"./yo.js": 325,
	"./zh-cn": 326,
	"./zh-cn.js": 326,
	"./zh-hk": 327,
	"./zh-hk.js": 327,
	"./zh-tw": 328,
	"./zh-tw.js": 328
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 419;

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_game_service__ = __webpack_require__(27);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'resource' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__classes_game_service__["a" /* GameService */]])
], ResourcePipe);

//# sourceMappingURL=resource.pipe.js.map

/***/ }),

/***/ 423:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__train_train__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wagons_wagons__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__station_station__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(211);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Train" tabIcon="train"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Wagons" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Station" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Map" tabIcon="compass"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Arthur/Documents/Projets/Jeux/RailsOcean/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map