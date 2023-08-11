(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-outlet-outlet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Lokasi Tukar Tambah</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n\n  <div class=\"div-h1\">\n    <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n        <h2>Lokasi Tukar Tambah</h2>\n    </div>\n    <ion-text>\n      <p>Kami telah memiliki lokasi tukar tambah barang elektronik anda.</p>\n    </ion-text>\n\n    <ion-card *ngFor=\"let item of stores\">\n      <ion-card-header>\n        <ion-card-title>{{item.name}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n       {{item.address}}\n      </ion-card-content>\n    </ion-card>\n\n    \n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: OutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function() { return OutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/settings/outlet/outlet.page.ts");




const routes = [
    {
        path: '',
        component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }
];
let OutletPageRoutingModule = class OutletPageRoutingModule {
};
OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.module.ts ***!
  \****************************************************************/
/*! exports provided: OutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageModule", function() { return OutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-routing.module */ "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/settings/outlet/outlet.page.ts");







let OutletPageModule = class OutletPageModule {
};
OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]
        ],
        declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })
], OutletPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-h1 {\n  position: absolute;\n}\n\n.bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 33px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\nion-searchbar {\n  --background: #FFF !important;\n  --border-radius: 10px !important;\n  transform: scale(1.1);\n  margin: 0 auto;\n  width: 90%;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9vdXRsZXQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdzXFxvdXRsZXRcXG91dGxldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3Mvb3V0bGV0L291dGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0o7O0FEQ0k7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURHSTtFQUNBLFdBQUE7QUNESjs7QURNRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNRTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7QUNISjs7QURNRTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0hOOztBRE1FO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9vdXRsZXQvb3V0bGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICAuYmctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIFxyXG4gICAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBwe1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAlOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCIuZGl2LWgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmctaW1hZ2Uge1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmJnLWltYWdlLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaDIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbnAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.page.ts ***!
  \**************************************************************/
/*! exports provided: OutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPage", function() { return OutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let OutletPage = class OutletPage {
    constructor(storage, sellingApiService, utilsService) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.stores = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getStore();
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
                console.log(this.stores);
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
};
OutletPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }
];
OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outlet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outlet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outlet.page.scss */ "./src/app/pages/landing/settings/outlet/outlet.page.scss")).default]
    })
], OutletPage);



/***/ })

}]);
//# sourceMappingURL=settings-outlet-outlet-module-es2015.js.map