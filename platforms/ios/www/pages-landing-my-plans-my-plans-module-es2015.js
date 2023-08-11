(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-plans-my-plans-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">\n      My Plans\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"0\">\n        Activated\n      </ion-segment-button>\n\n      <ion-segment-button value=\"1\">\n        Expired\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n   <ion-slides #slides pager=\"false\" [options]=\"sliderOptions\" (ionSlideDidChange)=\"slideShanged(slides)\" (ionSlidesDidLoad)=\"slideShanged(slides)\">\n     <ion-slide>\n      <ion-card *ngFor=\"let data of user.data?.process\">\n        <div *ngIf=\"(data.status == 1 || data.status == 0 )\">\n      <ion-card-header>\n        <ion-card-title>Activated</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content >\n        \n          <ion-item>\n            <ion-label position=\"floating\">Imei:</ion-label>\n            <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Type:</ion-label>\n            <ion-input value=\"{{ data.device_type }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Manufacturer:</ion-label>\n            <ion-input value=\"{{ data.device_manufacturer }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Model:</ion-label>\n            <ion-input value=\"{{ data.device_model }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">RAM:</ion-label>\n            <ion-input value=\"{{ data.device_ram }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Storage:</ion-label>\n            <ion-input value=\"{{ data.device_storage }}\" readonly></ion-input>\n          </ion-item>\n          \n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"floating\">Activated Date:</ion-label>\n            <ion-input value=\"{{ data.actived_at }}\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"floating\" >Expired Date:</ion-label>\n            <ion-input value=\"{{ data.expired_at }}\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"stacked\">Duration</ion-label>\n            <ion-input id=\"countdown\"></ion-input>          \n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 0\">\n            <ion-label position=\"stacked\">Status</ion-label>\n            <ion-input>Menunggu Verifikasi</ion-input>          \n          </ion-item>\n        \n      </ion-card-content>\n        </div>\n      </ion-card>  \n     </ion-slide>\n\n     <ion-slide>\n     <ion-card *ngFor=\"let data of user.data?.process\">\n      <div *ngIf=\"data.status == -2\">\n    <ion-card-header>\n      <ion-card-title>Expired</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content >\n      \n        <ion-item>\n          <ion-label position=\"floating\">Imei:</ion-label>\n          <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label position=\"floating\">Type:</ion-label>\n          <ion-input value=\"{{ data.device_type }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Manufacturer:</ion-label>\n          <ion-input value=\"{{ data.device_manufacturer }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Model:</ion-label>\n          <ion-input value=\"{{ data.device_model }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">RAM:</ion-label>\n          <ion-input value=\"{{ data.device_ram }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Storage:</ion-label>\n          <ion-input value=\"{{ data.device_storage }}\" readonly></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label position=\"floating\">Expired Date:</ion-label>\n          <ion-input value=\"{{ data.expired_at }}\" readonly></ion-input>\n        </ion-item>\n      \n    </ion-card-content>\n    </div>\n    </ion-card>  \n     </ion-slide>\n   </ion-slides>\n  </ion-content>\n    ");

/***/ }),

/***/ "./src/app/pages/landing/my-plans/my-plans-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/landing/my-plans/my-plans-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MyPlansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlansPageRoutingModule", function() { return MyPlansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-plans.page */ "./src/app/pages/landing/my-plans/my-plans.page.ts");




const routes = [
    {
        path: '',
        component: _my_plans_page__WEBPACK_IMPORTED_MODULE_3__["MyPlansPage"],
    }
];
let MyPlansPageRoutingModule = class MyPlansPageRoutingModule {
};
MyPlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MyPlansPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/my-plans/my-plans.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/my-plans/my-plans.module.ts ***!
  \***********************************************************/
/*! exports provided: MyPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlansPageModule", function() { return MyPlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _my_plans_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-plans.page */ "./src/app/pages/landing/my-plans/my-plans.page.ts");
/* harmony import */ var _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-plans-routing.module */ "./src/app/pages/landing/my-plans/my-plans-routing.module.ts");







let MyPlansPageModule = class MyPlansPageModule {
};
MyPlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyPlansPageRoutingModule"]
        ],
        declarations: [_my_plans_page__WEBPACK_IMPORTED_MODULE_5__["MyPlansPage"]]
    })
], MyPlansPageModule);



/***/ }),

/***/ "./src/app/pages/landing/my-plans/my-plans.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/my-plans/my-plans.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbXktcGxhbnMvbXktcGxhbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/landing/my-plans/my-plans.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/my-plans/my-plans.page.ts ***!
  \*********************************************************/
/*! exports provided: MyPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlansPage", function() { return MyPlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let MyPlansPage = class MyPlansPage {
    constructor(storage, MembershipService, utilsService) {
        this.storage = storage;
        this.MembershipService = MembershipService;
        this.utilsService = utilsService;
        this.user = [];
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidePerView: 1,
            speed: 400
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getMyPlan();
    }
    segmentChanged(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.selectedSlide.slideTo(this.segment);
        });
    }
    slideShanged(slides) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedSlide = slides;
            slides.getActiveIndex().then(selectedIndex => {
                this.segment = selectedIndex;
            });
        });
    }
    getMyPlan() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.MembershipService.myPlan(token).subscribe((response) => {
                this.user = response;
                this.rawCountdown = new Date(this.user.data.process[0].expired_at).getTime();
                // this.now = new Date().getTime();
                // this.countdown = this.rawCountdown -  this.now;
                this.x = setInterval(() => {
                    this.now = new Date().getTime();
                    this.countdown = this.rawCountdown - this.now;
                    var days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));
                    document.getElementById("countdown").innerHTML = days + "Hari lagi ";
                }, 1000);
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
        // let date = new Date().getTime()
        // console.log(date);
    }
};
MyPlansPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }
];
MyPlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-plans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-plans.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-plans.page.scss */ "./src/app/pages/landing/my-plans/my-plans.page.scss")).default]
    })
], MyPlansPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-my-plans-my-plans-module-es2015.js.map