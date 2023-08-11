(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/index/index.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/index/index.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Membership Activation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"middle-page\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title> <h3>Aktivasikan Membership ZFix Anda</h3> </ion-card-title>\n\n        <ion-card-subtitle>\n          Masukkan kode aktivasi yang tertera pada kemasan ZFix dan gadget IMEI\n          terdaftar pada saat pembelian\n        </ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label position=\"floating\">Kode Aktivasi ZFix</ion-label>\n          <ion-input [(ngModel)]=\"code\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">IMEI</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"imei\" [readonly]=\"!imeiEditable\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n        </ion-item>\n        \n          <label for=\"lokasi_beli_voucher\" style=\"color: black;\">Lokasi Beli Membership</label><br>\n          <input id=\"lokasi_beli_voucher\"  class=\"w3-input\" type=\"text\" [(ngModel)]=\"lokasi_beli_voucher\" [ngbTypeahead]=\"search\" [inputFormatter]=\"formatter\" [resultFormatter]=\"formatter\" [editable]='false' />\n\n          <!-- <ion-input type=\"text\" (ionInput)=\"searchStores($event)\" [(ngModel)]=\"searchStore\" (keyup.enter)=\"hideKeyboard()\"></ion-input> -->\n\n      <!-- <ion-list *ngIf=\"stores.data?.store.length > 0;\">\n        <ion-radio-group [(ngModel)]=\"lokasi_beli_voucher\">\n          <ion-item *ngFor=\"let store of searchedStores\">\n            <ion-label>{{ store.name }}</ion-label>\n            <ion-radio [value]=\"store.name\" slot=\"start\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list> -->\n      \n        <!-- <ion-list *ngIf=\"stores.data?.store.length > 0;\">\n        <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"lokasi_beli_voucher\">\n        <ion-item *ngFor=\"let store of searchedStores\">\n          <ion-label> {{ store.name }} </ion-label>\n          <ion-radio slot=\"start\" [value]=\"store.name\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n      </ion-list> -->\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" (click)=\"submit()\" class=\"ion-margin\">AKTIVASI</ion-button>\n        <!-- <ion-button expand=\"block\"  class=\"ion-margin\">BELI MEMBERSHIP ZFIX\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button> -->\n      </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/index/index-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/index/index-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/membership-activation/index/index.page.ts");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/index/index.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/index/index.module.ts ***!
  \***************************************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/landing/membership-activation/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/membership-activation/index/index.page.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"],
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/index/index.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/index/index.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  padding-left: 15px;\n  color: black;\n}\n\nlabel {\n  padding-left: 15px;\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vaW5kZXgvQzpcXFVzZXJzXFxtYWNhblxcRG93bmxvYWRzXFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OVxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtZW1iZXJzaGlwLWFjdGl2YXRpb25cXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0FDQ2hCOztBREVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59IiwiaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/index/index.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/index/index.page.ts ***!
  \*************************************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");














let IndexPage = class IndexPage {
    constructor(storage, uid, androidPermissions, platform, membershipApiService, utilsService, membership, navCtrl, router, splashScreen) {
        this.storage = storage;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.membership = membership;
        this.navCtrl = navCtrl;
        this.router = router;
        this.splashScreen = splashScreen;
        this.imeiEditable = true;
        this.stores = [];
        this.searchedStores = [];
        this.formatter = (store) => store.name;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(term => term.length >= 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(term => { var _a; return (_a = this.searchedStores.data) === null || _a === void 0 ? void 0 : _a.store.filter(store => new RegExp(term, 'mi').test(store.name)).slice(0, 5); }));
        let platforms = this.platform.platforms();
        // console.log(platforms[0]);
        if (platforms[0] == "android") {
            this.imei = this.uid.IMEI;
            if (this.imei != null) {
                this.imeiEditable = false;
            }
        }
    }
    ngOnInit() {
        this.getPermission();
    }
    ionViewWillEnter() {
        this.getStore();
        this.membership.removeMembershipActivation();
    }
    getPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
            if (res.hasPermission) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
                    this.utilsService.restart("Aplikasi akan memulai kembali secara otomatis untuk menampilkan IMEI.");
                }).catch(error => {
                    this.utilsService.showAlert(error);
                });
            }
        }).catch(error => {
            this.utilsService.showAlert(error);
        });
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.membershipApiService.getStore(token).subscribe((response) => {
                this.stores = response;
                this.searchedStores = this.stores;
                console.log(this.searchedStores);
            }, (err) => {
                this.stores = [];
                this.searchedStores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        if ((this.code == null || this.imei == null || this.lokasi_beli_voucher == null) || (this.code.replace(/\s/g, "") == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
                let membershipActivation = {
                    request_code: 0,
                    voucher_key: this.code,
                    lokasi_beli_voucher: this.lokasi_beli_voucher['name'],
                    imei: String(this.imei),
                };
                this.membershipApiService.check(token, membershipActivation).subscribe((response) => {
                    console.log(this.lokasi_beli_voucher);
                    let navigationExtras = {
                        queryParams: {
                            code: this.code,
                            imei: this.imei,
                            lokasi_beli_voucher: this.lokasi_beli_voucher['name'],
                        }
                    };
                    this.navCtrl.navigateForward(["/landing/membership-activation/device-detail"], navigationExtras);
                }, (err) => {
                    var error = {};
                    error = err.error;
                    this.utilsService.showToast(error.message);
                });
            });
        }
    }
    hideKeyboard() {
        this.utilsService.hideKeyboard();
    }
};
IndexPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_9__["MembershipService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__["SplashScreen"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/landing/membership-activation/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=membership-activation-index-index-module-es2015.js.map