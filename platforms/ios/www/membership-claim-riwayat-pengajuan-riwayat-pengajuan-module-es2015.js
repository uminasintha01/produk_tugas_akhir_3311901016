(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-claim-riwayat-pengajuan-riwayat-pengajuan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">\n      Riwayat Pengajuan\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"0\">\n        Active\n      </ion-segment-button>\n\n      <ion-segment-button value=\"1\">\n        Completed\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-slides #slides pager=\"false\" [options]=\"sliderOptions\" (ionSlideDidChange)=\"slideShanged(slides)\" (ionSlidesDidLoad)=\"slideShanged(slides)\">\n    <ion-slide>\n     <ion-card *ngFor=\"let data of user.data?.process\">\n       <div *ngIf=\"(data.status_claim == 0 || data.status_claim == 1 || data.status_claim == 2)\">\n     <ion-card-header>\n       <ion-card-title>Claimed</ion-card-title>\n     </ion-card-header>\n   \n     <ion-card-content >\n       \n         <ion-item>\n           <ion-label position=\"floating\">Imei:</ion-label>\n           <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n         </ion-item>\n\n         <ion-item>\n          <ion-label position=\"floating\">Voucher Type:</ion-label>\n          <ion-input value=\"{{ data.voucher_type }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Voucher Key:</ion-label>\n          <ion-input value=\"{{ data.voucher_key }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Serial Number:</ion-label>\n          <ion-input value=\"{{ data.serial_number }}\" readonly></ion-input>\n        </ion-item>\n\n         <ion-item>\n          <ion-label position=\"floating\">Tanggal Pengajuan:</ion-label>\n          <ion-datetime value=\"{{ data.created_at }}\" readonly></ion-datetime>\n        </ion-item>\n\n         <ion-item *ngIf=\"data.status == 2\">\n           <ion-label position=\"stacked\">Status</ion-label>\n           <ion-input readonly>Menunggu Verifikasi</ion-input>\n         </ion-item>\n\n         <ion-item *ngIf=\"data.status == 3\">\n          <ion-label position=\"stacked\">Status</ion-label>\n          <ion-input readonly>Claimed</ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"data.status_claim == 1\">\n          <ion-label position=\"stacked\">Progress</ion-label>\n          <ion-input readonly>Pick Up</ion-input>\n        </ion-item> \n\n        <ion-item *ngIf=\"data.status_claim == 2\">\n          <ion-label position=\"stacked\">Progress</ion-label>\n          <ion-input readonly>On Process</ion-input> \n        </ion-item>\n\n     </ion-card-content>\n       </div>\n     </ion-card>  \n    </ion-slide>\n\n    <ion-slide>\n      <ion-card *ngFor=\"let data of user.data?.process\">\n       <div *ngIf=\"data.status_claim == 3\">\n     <ion-card-header>\n       <ion-card-title>Completed</ion-card-title>\n     </ion-card-header>\n   \n     <ion-card-content >\n       \n         <ion-item>\n           <ion-label position=\"floating\">Imei:</ion-label>\n           <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n         </ion-item>\n  \n         <ion-item>\n          <ion-label position=\"floating\">Voucher Type:</ion-label>\n          <ion-input value=\"{{ data.voucher_type }}\" readonly></ion-input>\n        </ion-item>\n\n         <ion-item>\n          <ion-label position=\"floating\">Waktu Pengajuan:</ion-label>\n          <ion-datetime value=\"{{ data.created_at }}\" readonly></ion-datetime>\n        </ion-item>\n\n         <ion-item *ngIf=\"data.status_claim == 3\">\n           <ion-label position=\"stacked\">Status</ion-label>\n           <ion-input readonly>Complete</ion-input>\n         </ion-item>\n       \n     </ion-card-content>\n     </div>\n     </ion-card>  \n      </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: RiwayatPengajuanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiwayatPengajuanPageRoutingModule", function() { return RiwayatPengajuanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _riwayat_pengajuan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riwayat-pengajuan.page */ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.ts");




const routes = [
    {
        path: '',
        component: _riwayat_pengajuan_page__WEBPACK_IMPORTED_MODULE_3__["RiwayatPengajuanPage"]
    }
];
let RiwayatPengajuanPageRoutingModule = class RiwayatPengajuanPageRoutingModule {
};
RiwayatPengajuanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RiwayatPengajuanPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: RiwayatPengajuanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiwayatPengajuanPageModule", function() { return RiwayatPengajuanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _riwayat_pengajuan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./riwayat-pengajuan-routing.module */ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan-routing.module.ts");
/* harmony import */ var _riwayat_pengajuan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./riwayat-pengajuan.page */ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.ts");







let RiwayatPengajuanPageModule = class RiwayatPengajuanPageModule {
};
RiwayatPengajuanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _riwayat_pengajuan_routing_module__WEBPACK_IMPORTED_MODULE_5__["RiwayatPengajuanPageRoutingModule"]
        ],
        declarations: [_riwayat_pengajuan_page__WEBPACK_IMPORTED_MODULE_6__["RiwayatPengajuanPage"]]
    })
], RiwayatPengajuanPageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1jbGFpbS9yaXdheWF0LXBlbmdhanVhbi9yaXdheWF0LXBlbmdhanVhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.ts ***!
  \********************************************************************************************/
/*! exports provided: RiwayatPengajuanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiwayatPengajuanPage", function() { return RiwayatPengajuanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let RiwayatPengajuanPage = class RiwayatPengajuanPage {
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
        this.getMyClaim();
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
    getMyClaim() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.MembershipService.Claim(token).subscribe((response) => {
                this.user = response;
                // console.log(response); 
            }, (err) => {
                console.log(err);
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
};
RiwayatPengajuanPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }
];
RiwayatPengajuanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-riwayat-pengajuan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./riwayat-pengajuan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./riwayat-pengajuan.page.scss */ "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.page.scss")).default]
    })
], RiwayatPengajuanPage);



/***/ })

}]);
//# sourceMappingURL=membership-claim-riwayat-pengajuan-riwayat-pengajuan-module-es2015.js.map